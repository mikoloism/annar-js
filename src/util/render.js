const _ = require('lodash');
const dom = require('./dom');
const html = require('./html');

// const element = { ...document.htmlTags }; // pson.element.div(...other);
const create = (tag, other) => {
	return from({ tag, ...other });
};
const from = (props) => {
	let tag = html.create(props.tag);
	const AsChild = ['children', 'html', 'text', 'md', 'from'];
	const AsAttr = ['id', 'class', 'data-', '...attr'];
	// AsAttr
	if (props.id) dom.id(tag, props.id);
	if (props.class) dom.class(tag).add(props.class);
	if (props.data) dom.data(tag).add(props.data);
	if (props.attrs) dom.attrs(tag, props.attrs);

	// AsChild
	if (props.children)
		_.forEach(props.children, (child) => dom.append(tag).with(from(child)));
	else if (props.html) dom.append(tag).from(html.from(props.html));
	else if (props.text) dom.append(tag).with(html.text(props.text));
	else if (props.md) dom.append(tag).with(html.create('div'));
	else if (props.from) dom.append(tag).from(props.from);

	if (props.parent) dom.append(props.parent).with(tag);

	return tag;
};

module.exports = from;

//# dom.append(tag).with(md.render(props.md));
