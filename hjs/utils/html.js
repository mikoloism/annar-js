import _ from 'lodash';
import jsdom from 'jsdom';

let document = new jsdom.JSDOM().window.document;

const html = {
	/** #from-1 */
	from(html) {
		const frag = document.createElement('div');
		frag.innerHTML = html;
		return [...frag.childNodes];
	},

	/** #from-2 */
	from2(html) {
		const frag = document.createElement('template');
		frag.innerHTML = html;
		return frag.content;
	},

	/** #from-3 */
	from3(html) {
		const frag = document.createElement('div');
		frag.innerHTML = html;
		const childs = [];
		frag.childNodes.forEach((child) =>
			childs.push(
				child.nodeType === document.TEXT_NODE
					? child.nodeValue
					: {
							el: _.toLower(child.nodeType),
							class: child.classList,
							id: child.id,
							attrs: child.attributes,
							html: child.innerHTML,
					  },
			),
		);
		return childs;
	},
	create(elementType) {
		return document.createElement(elementType);
	},
	fragment(template = false) {
		return template
			? document.createElement('template')
			: document.createDocumentFragment();
	},
	text(value) {
		return document.createTextNode(value);
	},
};

export default html;

/** from-1
 * `<div>text</div>`
 * to
 * `{ el: div, ... }`
 * @description usage
 * #### html.from(html-string).forEach((child) => parent.appendChild(child));
 */
/** from-2
 * `<div>text</div>`
 * to
 * `{ el: div, ... }`
 * @description usage
 * #### parent.appendChild(html.from(html-string))
 */
