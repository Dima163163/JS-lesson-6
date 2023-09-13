'use strict';

const allCashboxHard = [
	[12, 4500],
	[7, 3210],
	[4, 650],
	[3, 1250],
	[9, 7830],
	[1, 990],
	[6, 13900],
	[1, 370]
];

const getAveragePriceGoods = (arr) => {
	const result = arr.map(elem => {
		return Math.round(elem[1] / elem[0])
	});

	return result;
};

const getAveragePriceGoodsFor = (arr) => {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		let averagePrice = Math.round(arr[i][1]/arr[i][0]);
		newArr.push(averagePrice)
	}

	return newArr;
};

console.log(getAveragePriceGoods(allCashboxHard))
console.log('getAveragePriceGoodsFor: ', getAveragePriceGoodsFor(allCashboxHard))