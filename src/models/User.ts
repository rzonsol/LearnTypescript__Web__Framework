import { Eventing, Callback } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

const rootUrl = 'http://localhost:3000/users/';

export class User {
	private events: Eventing;
	private sync: Sync<UserProps>;
	private attributes: Attributes<UserProps>;

	constructor(attrs: UserProps) {
		this.attributes = new Attributes<UserProps>(attrs);
		this.events = new Eventing();
		this.sync == new Sync<UserProps>(rootUrl);
	}

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	get get() {
		return this.attributes.get;
	}

	set(upadte: UserProps): void {
		this.attributes.set(upadte);
		this.events.trigger('change');
	}
}
