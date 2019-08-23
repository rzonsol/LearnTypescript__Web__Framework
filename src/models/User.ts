import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

const rootUrl = 'http://localhost:3000/users/';

export class User {
	public events: Eventing;
	public sync: Sync<UserProps>;

	constructor(private data: UserProps) {
		this.events = new Eventing();
		this.sync = new Sync<UserProps>(rootUrl);
	}

	get(propName: string): number | string {
		return this.data[propName];
	}

	set(props: UserProps): void {
		Object.assign(this.data, props);
	}
}
