import _ from 'lodash';
import { document, window } from './document';

const className = function ConvertToValidateClass(value) {
	if (_.isString(value)) return value.split(' ');
	if (_.isArray(value)) {
		let isValid = value.every((val) => _.isString(val));
		return isValid ? value : value.filter((val) => _.isString(val));
		// OR: retrun value.join(' ').split(' ');
		// OR: return value.filter((val) => _.isString(val));
	}

	return [];
};
const toHTMLObject = function StringToHTMLObject(htmlString) {
	const fragment = document.createElement('template');
	fragment.innerHTML = htmlString;
	return fragment.content;
};

const dom = function hjsDOM(HTMLObject) {
	return {
		attr(attribute, value) {
			if (value) {
				HTMLObject.setAttribute(attribute, value);
				return this;
			}
			if (_.isObject(attribute)) {
				_.forEach(attribute, (value, _attr) => {
					HTMLObject.setAttribute(attribute, value);
				});
				return this;
			}
			return HTMLObject.getAttribute(attr);
		},
		id(value) {
			if (value) {
				HTMLObject.setAttribute('id', value);
				return this;
			}
			return HTMLObject.getAttribute('id');
		},
		class(value) {
			if (value) {
				if (_.isObject(value)) {
					_.forEach(value, (v, key) => {
						HTMLObject.classList.replace(key, v);
					});
					return this;
				}

				let vClass = className(value);
				vClass.forEach((v) => HTMLObject.classList.toggle(v));
				return this;
			}
			return HTMLObject.classList;
		},
		dataset(key, value) {
			if (value) {
				HTMLObject.dataset[key] = value;
				return this;
			}
			return HTMLObject.dataset[key];
		},
		append(HTMLChildObject) {
			HTMLObject.appendChild(HTMLChildObject);
			return this;
		},
		replace(HTMLReplacementObject) {
			HTMLObject.replaceWith(HTMLReplacementObject);
			return this;
		},
		select(selector) {
			return document.querySelector(selector);
		},
	};
};

const html = {
	createElement(tag) {
		return document.createElement(tag);
	},
	createFragment() {
		return document.createDocumentFragment();
	},
	createText(...content) {
		return document.createTextNode(content.join(''));
	},
	createFrom(htmlString) {
		return toHTMLObject(htmlString);
	},
	isHtml(obj) {
		return (
			_.isObject(obj) && obj !== null && obj instanceof window.HTMLElement
		);
	},
	isNode(obj) {
		return _.isObject(obj) && obj !== null && obj instanceof window.Node;
	},
	isElement(obj) {
		return (
			_.isObject(obj) &&
			obj !== null &&
			(obj instanceof window.Element ||
				obj instanceof document.documentElement)
		);
	},
};

export { html };
export default dom;
// * POWERED: https://github.com/miko-github/dash-dash
