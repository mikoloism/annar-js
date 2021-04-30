import fs from 'fs';
import dom from './dom';
import Html from './html';
import renderer from './render';

const render = (pson) => {
	return renderer(pson);
};
const mounter = (html, rootEl) => {
	return rootEl.appendChild(html);
};
const mount = (rootSon, rootEl) => {
	// 1. render(pson)
	// 2. select(mount-point) || mount-point
	// 3. replace(mount-point, rendred);
	let rendered = render(rootSon);
	let replaceEl = dom.select(rootEl);
	fs.writeFileSync('./index.html', rendered.outerHTML, 'utf8');
	return replaceEl;
	// return mounter(rendered, replaceEl);
};

export default mount;
