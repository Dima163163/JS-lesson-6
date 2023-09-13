'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
	const result = arr.reduce((acc, elem) => {
		acc += elem;
		return acc
	}, 0);

	const total = Math.floor(result / 2);
	return total;
};

const getAverageValueFor = (arr) => {
	let total = 0;

	for(let i = 0; i < arr.length; i++) {
		total += arr[i];
	}

	return Math.floor(total / 2);;
};

console.log('Средний чек за день: ', getAverageValue(allCashbox));
console.log('Средний чек за день(for): ', getAverageValueFor(allCashbox));