import { User, UserProps } from '../models/User';
import { isThisTypeNode } from 'typescript';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.change-name': this.onSetNameClick
		};
	}

	onSetNameClick = (): void => {
		const input = this.parent.querySelector('input');
		if (input) {
			const name = input.value;
			this.model.set({ name });
		}
	};

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

	private onButtonClick() {
		console.log('Hi there.');
	}

	template(): string {
		return `
            <div>
                <h1>User Form</h1>
                <div>User name: ${this.model.get('name')}</div>
                <div>User age: ${this.model.get('age')}</div>
                <input />
                <button class="change-name">Change name</button>
                <button class="set-age">Set random age</button>
            </div>
        `;
	}
}
