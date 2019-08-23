import axios, { AxiosResponse } from 'axios';

interface UserProps {
	id?: number;
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

	fetch(): void {
		axios.get(`http://localhost:3000/users/${this.get('id')}`).then(
			(response: AxiosResponse): void => {
				this.set(response.data);
				console.log(this);
			}
		);
	}

	save(): void {
		const id = this.get('id');
		if (id) {
			axios.put(`http://localhost:3000/users/${id}`, this.data);
		} else {
			axios.post('http://localhost:3000/users', this.data).then(
				(response: AxiosResponse): void => {
					this.set(response.data);
				}
			);
		}
	}
}
