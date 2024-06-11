import { fail } from '@sveltejs/kit';
import type { Actions } from './$types.js';
import {
	GOOGLE_RECATCHA_SECRET_KEY,
	TELEGRAM_BOT_TOKEN,
	TELEGRAM_USER_ID
} from '$env/static/private';

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		let attmpts: number = parseInt(cookies.get('attmpts') || '0') || 0;

		if (attmpts >= 2) {
			return fail(429);
		}

		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');
		const recaptcha = data.get('recaptcha');

		const response = await fetch(
			`https://www.google.com/recaptcha/api/siteverify?secret=${GOOGLE_RECATCHA_SECRET_KEY}&response=${recaptcha}`,
			{ method: 'POST' }
		);

		const json = await response.json();

		if (json.success === true || json.score > 0.8) {
			cookies.set('attmpts', `${attmpts + 1}`, {
				path: '/',
				expires: new Date(Date.now() + 86400 * 1000),
				httpOnly: true
			});

			await fetch(
				`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_USER_ID}&text=${name}%20${email}%0A%0A${message}`
			);

			return {};
		}

		return fail(500);
	}
};
