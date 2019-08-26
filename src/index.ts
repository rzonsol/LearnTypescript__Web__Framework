import axios from 'axios';
import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'Piotr', age: 35 });
user.on('save', () => {
	console.log('User was save!');
});
user.save();
console.log(user);
