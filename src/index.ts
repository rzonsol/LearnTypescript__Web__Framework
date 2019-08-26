import { UserForm } from './View/UserForm';
import { User } from './models/User';

const rootHtml = document.getElementById('root');
console.log(rootHtml);

const user: User = User.buildUser({ name: 'name', age: 20 });

const userForm: UserForm = new UserForm(rootHtml, user);
userForm.render();
