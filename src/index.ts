import axios from 'axios';
import { User } from './models/User';

// axios.post('http://localhost:3000/users', { name: 'piotr', age: '32' });
const user = new User({ id: 1, name: 'Piotr', age: 35 });
user.on('save', () => {
	console.log('User was save!');
});
user.save();
console.log(user);
