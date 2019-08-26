import axios from 'axios';
import { User } from './models/User';

// axios.post('http://localhost:3000/users', { name: 'piotr', age: '32' });
const user = new User({ name: 'sjdhfjsh', age: 12 });
user.on('change', () => {
	console.log('Uer was change!!');
});
user.set({ name: 'Piotr' });
