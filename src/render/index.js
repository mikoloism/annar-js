import _ from 'lodash';
import { html, dom } from './../dom';

/**
 * Helper
 * @param {*} HJSObject
 * AsChildren: ['children', 'html', 'text', 'md', 'from']
 * AsAttributes: ['id', 'class', 'data-', '...attr']
 */
const renderOne = function RenderHJSSingleRoot(HJSObject) {
	/* Extracing And Init
	----------------------------- */
	let { tag: _tag, id: _id, class: _class, attr: _attr } = HJSObject;
	let _dataset = HJSObject?.dataset || HJSObject?.data;
	let tag = html.createElement(_tag);

	/* Extracing And Init
	----------------------------- */
	return dom(tag)
		.id(_id)
		.attr({ ..._attr })
		.dataset({ ..._dataset })
		.class(_class)
		.currentElement();
};
const render = function RenderHJSNesting(HJSObject) {
	let element = renderOne(HJSObject);

	//  TODO: add (md, from, ejs, jsx)
	let { children: _children, text: _text, html: _html } = HJSObject;
	if (_children) {
		if (_.isArray(_children)) {
			_children.forEach((_child) => {
				let child = render(_child);
				dom(element).append(child);
			});
		}
		if (_.isObject(_children)) {
			let child = render(_children);
			dom(element).append(child);
		}

		// TODO: _.isString() ? `html` || `text` : _.isObject() > _.isHTML() ? append(children)
	} else if (_text) {
		let child = html.createText(_text);
		dom(element).append(child);
	} else if (_html) {
		let _child = _.isArray(_html) ? _html : [_html];
		if (_.isString(_html)) _child = html.createFrom(_html);
		_child.forEach((child) => dom(element).append(child));
	}
	return element;
};

export default render;
