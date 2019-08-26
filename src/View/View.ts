import { Callback } from '../models/Eventing';
import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
	abstract eventsMap(): { [key: string]: () => void };
	abstract template(): string;

	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}

	bindModel() {
		this.model.on('change', () => {
			this.render();
		});
	}

	bindEvents(fragment: DocumentFragment): void {
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
