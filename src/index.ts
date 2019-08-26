import axios from 'axios';
import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';

const collection: Collection<User, UserProps> = User.buildUserCollection();
collection.fetch();
console.log(collection);
