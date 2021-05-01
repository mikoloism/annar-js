import fs from 'fs';
import render from '../render';

const compiler = function RenderToFile(
	HJSObject,
	filePath = '../../public/index.html',
) {
	let HTMLObject = render(HJSObject);
	fs.writeFileSync(FilePath, HTMLObject.outerHTML, 'utf8');
};

export default compiler;
