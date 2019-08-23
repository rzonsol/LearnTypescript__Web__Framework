import { User } from './models/User';

const user = new User({ name: 'piotr', age: 32 });
console.log(`
name: ${user.get('name')};
age: ${user.get('age')}
`);
