import { Eventing } from './Eventing';

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

export class User {
	public events: Eventing;

	constructor(private data: UserProps) {
		this.events = new Eventing();
	}

	get(propName: string): number | string {
		return this.data[propName];
	}

	set(props: UserProps): void {
		Object.assign(this.data, props);
	}
}
