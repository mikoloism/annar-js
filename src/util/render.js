const _ = require('lodash');
const doc = require('./doc');
const html = require('./html');

const App = html.fragment();
function append(tag, child) {
	doc.append(child, tag);
}
function mount(moutPoint = document.getElementById('app')) {
	doc.replace(moutPoint).with(App);
}
function element({
	class: className,
	tag = 'div',
	id,
	text,
	children,
	parent,
	html: _html,
}) {
	let _tag = html.create('div');
	if (text) {
		let _text = document.createTextNode(text);
		append(_tag, _text);
	}
	if (id) doc.id(_tag, id);
	if (className) doc.class(_tag, className);
	if (_html) doc.append(_tag).from(html.from(_html));
	if (children) doc.append(_tag).from(...children);
	if (parent) doc.append(_tag, parent);
	return _tag;
}
