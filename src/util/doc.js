const _ = require('lodash');

const classFrom = (arg) => {
	if (_.isString(arg)) return arg.split(' ');
	else if (_.isArray(arg)) {
		let isValid = arg.every((cls) => _.isString(cls));
		return isValid ? arg : arg.filter((cls) => _.isString(cls));
	} else return [];
};
const doc = {
	attr(element, attr, value) {
		element.setAttribute(attr, value);
	},
	attrs(element, attributes) {
		if (_.isObject(attributes)) {
			_.forEach(attributes, (value, attr) =>
				doc.attr(element, attr, value),
			);
		}
	},
	id(el, id) {
		doc.attr(el, 'id', id);
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
module.exports = doc;

/** CLASS
 * @description
 *
 * doc.class(el).add(['class1', 'class-2', ...]);\
 * doc.class(el).add('class1', 'class-2', ...);\
 * doc.class(el).add('class1 class-2 ...');\
 * doc.class(el).remove(...);\
 * doc.class(el).toggle('class-1', 'class-2'); // replace\
 * doc.class(el).exist('class'); // if isExist return true and else return false\
 * doc.class(el, 'classes'); // if exist, remove and else add\
 */
/** APPEND
 * @description
 *
 * doc.append('child').to('parent');
 * doc.append('parent').with('child');
 * doc.append('parent').from(...children);
 * doc.append('child', 'parent');
 */
