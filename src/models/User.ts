interface UserProps {
	name?: string;
	age?: number;
}

type Callback = () => {};

export class User {
	private events: { [key: string]: Callback[] } = {};

	constructor(private data: UserProps) {}

	get(propName: string): number | string {
		return this.data[propName];
	}

	set(props: UserProps): void {
		Object.assign(this.data, props);
	}

	on(eventName: string, callback: Callback) {}
}
