// import defaulter from '../defaulter';

import _ from 'lodash';

class Component {
	constructor(propObject = defaulter) {
		const { tag, id, class: className, data, props, children } = propObject;
		this.Properties = propObject;
		this.tag = tag;
		this.id = id;
		this.className = className;
		this.data = data;
		this.stats = {};
		this.props = props;
		this.children = children;

		// hjs.render(this.Properties);
		this.Element = {};
	}

	toJOM() {
		return this.Properties;
	}
	toDOM() {
		return this.Element;
	}

	class = {
		add: (name) => {
			this.Element.classList.add(name);
			return this;
		},
		remove: (name) => {
			this.Element.classList.remove(name);
			return this;
		},
		has: (name) => {
			this.Element.classList.includes(name);
			return this;
		},
	};
	dataset(key, value) {
		// Arguments: datasetList = {}
		// _.forEach(datasetList, (value, key) => {
		// 	this.Element.dataset.set(key, value);
		// });
		// return this;
		if (value) {
			this.Element.dataset.set(key, value);
			return this;
		}
		if (key) return this.Element.dataset.get(key);
		return this.Element.dataset;
	}
	attr(name, value) {
		if (value) {
			this.Element.setAttribute(name, value);
			return this;
		}
		if (name) return this.Element.getAttribute(name);
		return this.Element.attributes;
	}
	attrs(attrList = {}) {
		_.forEach(attrList, (value, attr) => {
			this.Element.setAttribute(attr, value);
		});
		return this;
	}
}

const createComponent = (tag) => new Component({ tag });

export { createComponent, Component };
