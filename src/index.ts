import axios from 'axios';
import { User } from './models/User';

// axios.post('http://localhost:3000/users', { name: 'piotr', age: '32' });
const user = new User({ id: 14 });
user.on('change', () => {
	console.log('User was change!');
});
user.fetch();
console.log(user);
