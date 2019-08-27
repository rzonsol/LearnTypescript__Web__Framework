import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
	regions: { [key: string]: Element } = {};
	abstract template(): string;

	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}

	regionsMap(): { [key: string]: string } {
		return {};
	}

	mapRegions(fragment: DocumentFragment): void {
		const regionsMap = this.regionsMap();
		Object.keys(regionsMap).forEach(
			(key: string): void => {
				const element = fragment.querySelector(regionsMap[key]);
				if (element) {
					this.regions[key] = element;
				}
			}
		);
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

	onRender() {}

	render(): void {
		this.parent.innerHTML = '';
		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		this.bindEvents(templateElement.content);
		this.mapRegions(templateElement.content);

		this.onRender();

		this.parent.append(templateElement.content);
	}

	eventsMap(): { [key: string]: () => void } {
		return {};
	}
}
