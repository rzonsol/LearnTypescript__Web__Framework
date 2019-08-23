import axios from 'axios';
import { User } from './models/User';

// axios.post('http://localhost:3000/users', { name: 'piotr', age: '32' });
const user = new User({ name: 'sjdhfjsh', age: 12 });
user.events.on('change', () => {
	console.log('change');
});

user.events.trigger('change');
// const user = new User({ id: 15 });
// user.fetch();
// setTimeout(() => {
// user.set({ name: 'ppo' });
// console.log(user.get('name'));
// user.save();
// console.log(user);
// }, 2000);
