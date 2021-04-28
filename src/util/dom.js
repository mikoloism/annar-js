const _ = require('lodash');

const classFrom = (arg) => {
	if (_.isString(arg)) return arg.split(' ');
	else if (_.isArray(arg)) {
		let isValid = arg.every((cls) => _.isString(cls));
		return isValid ? arg : arg.filter((cls) => _.isString(cls));
	} else return [];
};
const dom = {
	attr(element, attr, value) {
		element.setAttribute(attr, value);
	},
	attrs(element, attributes) {
		if (_.isObject(attributes)) {
			_.forEach(attributes, (value, attr) =>
				dom.attr(element, attr, value),
			);
		}
	},
	id(el, id) {
		dom.attr(el, 'id', id);
	},
	class(element, classes = null) {
		if (classes !== null) {
			classFrom(classes).forEach((cls) => element.classList.toggle(cls));
			return undefined;
		} else {
			return {
				add(classList) {
					classFrom(classList).forEach((cls) =>
						element.classList.add(cls),
					);
				},
				remove(classList) {
					classFrom(classList).forEach((cls) =>
						element.classList.remove(cls),
					);
				},
				toggle(older, newer) {
					let [class_1, class_2] = [
						classFrom(older)[0],
						classFrom(newer)[0],
					];
					if (_.isString(class_1) && _.isString(class_2)) {
						element.classList.remove(class_1);
						element.classList.add(class_2);
					}
				},
			};
		}
	},

	append(element, element2 = null) {
		if (element2 !== null) {
			element2.append(element);
			return undefined;
		} else {
			return {
				to(parent) {
					parent.appendChild(element);
				},
				with(child) {
					element.appendChild(child);
				},
				from(...children) {
					children.forEach((child) => element.appendChild(child));
				},
			};
		}
	},
	replace(older, replacement = null) {
		return replacement !== null
			? older.replaceWith(replacement)
			: {
					with(newer) {
						older.replaceWith(newer);
					},
			  };
	},
};
module.exports = dom;

/** CLASS
 * @description
 *
 * dom.class(el).add(['class1', 'class-2', ...]);\
 * dom.class(el).add('class1', 'class-2', ...);\
 * dom.class(el).add('class1 class-2 ...');\
 * dom.class(el).remove(...);\
 * dom.class(el).toggle('class-1', 'class-2'); // replace\
 * dom.class(el).exist('class'); // if isExist return true and else return false\
 * dom.class(el, 'classes'); // if exist, remove and else add\
 */
/** APPEND
 * @description
 *
 * dom.append('child').to('parent');
 * dom.append('parent').with('child');
 * dom.append('parent').from(...children);
 * dom.append('child', 'parent');
 */
