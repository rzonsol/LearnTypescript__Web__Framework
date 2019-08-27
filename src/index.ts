import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';
import { UserList } from './View/UserList';

const users = new Collection(
	'http://localhost:3000/users/',
	(json: UserProps) => {
		return User.buildUser(json);
	}
);
console.log(users);
users.on('change', () => {
	const root = document.getElementById('root');
	if (root) {
		new UserList(root, users).render();
	}
});

users.fetch();
