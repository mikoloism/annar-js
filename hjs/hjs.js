import render from './util/mount';

const pson = (objects, element) => {
	let HTMLPson = render(objects, element);
	return HTMLPson;
};

export default pson;
