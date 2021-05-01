import { JSDOM } from 'jsdom';
// import fs from 'fs';
// parse template (public/index.html) as parameter
// OR: JSDOM.fromFile();

let window, document;

if (!window) {
	let jsDom = new JSDOM();
	window = jsDom.window;
	document = window.document;
}

export { document, window, JSDOM };
