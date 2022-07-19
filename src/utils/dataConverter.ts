import { Row } from '../components';
import { User, Account, Image, Payment } from '../types';

export interface IDataConverter {
	users: User[];
	accounts: Account[];
	images: Image[];
}

function compare(a: Payment, b: Payment): number {
	if (new Date(a.date) > new Date(b.date)) {
		return -1;
	}
	if (new Date(a.date) < new Date(b.date)) {
		return 1;
	}
	return 0;
}

export const dataConverter = (
	images: Image[],
	users: User[],
	accounts: Account[]
): Row[] => {
	return users.reduce((acc, user) => {
		const image = images.find((image) => image.userID === user.userID);
		const account = accounts.find((account) => account.userID === user.userID);
		const lastPayments = account.payments.sort(compare)[0];

		acc.push({
			avatar: image ? image.url : '',
			username: user.username,
			country: user.country,
			name: user.name,
			lastPayments: lastPayments ? lastPayments.totalSum : 0,
			posts: account ? account.posts : 0,
		});
		return acc;
	}, []);
};
