interface UserProps {
	name?: string;
	age?: number;
	id?: number;
}

type Callback = () => void;

export class User {
	private events: { [key: string]: Callback[] } = {};

	constructor(private data: UserProps) {}

	get(propName: string): number | string {
		return this.data[propName];
	}

	set(props: UserProps): void {
		Object.assign(this.data, props);
	}

	on(eventName: string, callback: Callback): void {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}

	trigger(eventName: string): void {
		const handlers = this.events[eventName];

		if (!handlers || handlers.length === 0) {
			return;
		}
		handlers.forEach(callback => callback());
	}
}
