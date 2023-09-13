'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, str) => {
	const result = arr.map(elem => `${str} ${elem}`)
	return result;
};

const addPrefixFor = (arr, str) => {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		let newName = str + ' ' + arr[i];
		newArr.push(newName);
	}
	return newArr;
}

console.log(addPrefix(names, 'Mr'))
console.log('addPrefixFor: ', addPrefixFor(names, 'Mr'))
