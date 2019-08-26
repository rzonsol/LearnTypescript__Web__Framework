import { UserForm } from './View/UserForm';
import { User } from './models/User';
import { UserEdit } from './View/UserEdit';

const rootHtml = document.getElementById('root');
console.log(rootHtml);

const user: User = User.buildUser({ name: 'name', age: 20 });
if (rootHtml) {
	const userEdit = new UserEdit(rootHtml, user);
	userEdit.render();
	console.log(userEdit);
}
