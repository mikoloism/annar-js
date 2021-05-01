import { JSDOM } from 'jsdom';
// import fs from 'fs';
// parse template (public/index.html) as parameter
// OR: JSDOM.fromFile();

// TODO: check if global window is available, use them, else, create with JSDOM
// let _window, _document;
// if (!window) {
let { window } = new JSDOM();
let { document } = window;
// _window = jsDom.window;
// _document = window.document;
// }

// TODO: may export const { ...obj };
export { document, window, JSDOM };
