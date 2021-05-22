function add<Type>(x: Type, y: Type) {
	if (typeof x === 'string' && typeof y === 'string') {
		return x + y;
	}
	if (typeof x === 'number' && typeof y === 'number') {
		return x + y;
	}
	throw new Error('tserror');
}

const strings = add('1', '2'); //"12"
const numbers = add(1, 2); // 3

const q1 = add({}, {}); // tserror
const q2 = add(1, '2'); // tserror
