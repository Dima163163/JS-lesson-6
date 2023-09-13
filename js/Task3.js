'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, str) => {
	const result = arr.map(elem => {
		return `${str} ${elem}`
	})
	return result
}

console.log(addPrefix(names, 'Mr'))