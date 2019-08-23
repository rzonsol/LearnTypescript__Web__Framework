import { User } from './models/User';

const user = new User({ name: 'piotr', age: 32 });

user.on('change', () => {
	console.log('callback1');
});
user.on('change', () => {
	console.log('callback2');
});

console.log(user);
user.trigger('change');
