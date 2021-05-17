import fs from 'fs';
import render from '../render';

const compiler = function RenderToFile(HJSObject, RootElement) {
	let filePath = '../../public/index.html';
	let HTMLObject = render(HJSObject);
	fs.writeFileSync(filePath, HTMLObject.outerHTML, 'utf8');
};

export default compiler;
