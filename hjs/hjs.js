import Render from './render';
import Compiler from './compiler';
import createHjs from './create-hjs';
import JOM from './jom';
import DOM from './dom';
import utils from './utils';

// JSOM || JOM => JavaScript-Object-Model
// actullay, alike DOM but only fetch hjs objects

const pson = (objects, element) => {
	let HTMLPson = render(objects, element);
	return HTMLPson;
};

export default { Render, Compiler, createHjs, DOM, JOM, utils };
