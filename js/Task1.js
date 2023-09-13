'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

function filter (arrAll, arrFailed) {
	let result = arrAll.filter(elem => !arrFailed.includes(elem))

	return result;
}

function filterFor (arrAll, arrFailed) {
	const arr = [];
	for (let i = 0; i < arrAll.length; i++){
		if(!arrFailed.includes(arrAll[i])){
			arr.push(arrAll[i])
		}
	}

	return arr;
}

console.log('Студенты которые сдали экзамен: ', filter(allStudents, failedStudents));

console.log('Студенты которые сдали экзамен(for): ', filterFor(allStudents, failedStudents));