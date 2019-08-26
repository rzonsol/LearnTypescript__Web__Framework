import { User } from '../models/User';
import { isThisTypeNode } from 'typescript';

export class UserForm {
	constructor(private parent: Element, public model: User) {
		this.bindModel();
	}

	bindModel() {
		this.model.on('change', () => {
			this.render();
		});
	}

	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.change-name': this.onSetNameClick
		};
	}

	onSetNameClick = (): void => {
		const input = this.parent.querySelector('input');
		const name = input.value;
		this.model.set({ name });
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

	private bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap();

		Object.keys(eventsMap).forEach(key => {
			const [eventName, selector] = key.split(':');
			fragment.querySelectorAll(selector).forEach(element => {
				element.addEventListener(eventName, eventsMap[key]);
			});
		});
	}

	render(): void {
		this.parent.innerHTML = '';
		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		this.bindEvents(templateElement.content);
		this.parent.append(templateElement.content);
	}
}
