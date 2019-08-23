interface UserProps {
	name?: string;
	age?: number;
}

export class User {
	constructor(private data: UserProps) {}

	get(propName: string): number | string {
		return this.data[propName];
	}

	set(props: UserProps): void {
		Object.assign(this.data, props);
	}
}
