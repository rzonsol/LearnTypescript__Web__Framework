import { UserForm } from './View/UserForm';

const rootHtml = document.getElementById('root');
console.log(rootHtml);

const userForm: UserForm = new UserForm(rootHtml);
userForm.render();
