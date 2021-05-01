import { JSDOM } from 'jsdom';
// import fs from 'fs';

// parse template (public/index.html) as parameter
const { window } = new JSDOM();
const { document } = window;

export { document, window, JSDOM };
