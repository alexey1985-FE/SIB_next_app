import bcrypt from 'bcryptjs';

const data = {
	users: [
		{
			name: 'Alexey Yevkov',
			email: 'alexeyyevkov@gmail.com',
			password: bcrypt.hashSync('Alexey1985'),
			isAdmin: true,
		},
	],
};

export default data;
