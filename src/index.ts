import axios from 'axios';
import { User } from './models/User';
import { Collection } from './models/Collection';

const collection: Collection = new Collection('http://localhost:3000/users/');
collection.fetch();
console.log(collection);
