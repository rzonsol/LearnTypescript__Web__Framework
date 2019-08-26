import { User } from '../models/User';

export class UserForm {
	constructor(private parent: Element, public model: User) {}

	eventsMap(): { [key: string]: () => void } {
		return {
			'click:button': this.onButtonClick
		};
	}

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
                <button>Save</button>
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
		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		this.bindEvents(templateElement.content);
		this.parent.append(templateElement.content);
	}
}
