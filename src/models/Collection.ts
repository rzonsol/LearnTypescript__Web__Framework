import { User, UserProps } from './User';
import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

export class Collection {
	models: User[] = [];
	events: Eventing = new Eventing();

	constructor(private rootUrl: string) {}

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	fetch() {
		axios.get(this.rootUrl).then(
			(response: AxiosResponse): void => {
				response.data.forEach(
					(element: UserProps): void => {
						this.models.push(User.buildUser(element));
					}
				);
			}
		);
	}
}
