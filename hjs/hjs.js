import Render from './utils/render';
import Compile from './utils/compile';

const pson = (objects, element) => {
	let HTMLPson = render(objects, element);
	return HTMLPson;
};

export default pson;
