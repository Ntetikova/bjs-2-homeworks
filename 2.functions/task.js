
// Задача №1 Исследовать массив:

function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {		
		if (min > arr[i]) {
			min = arr[i];
		}
		if (max < arr[i]) {
			max = arr[i];
		}
    sum += arr[i];
	}
	console.log(sum)
	let avg = sum / arr.length
	avg = Number(avg.toFixed(2))
	return { 
    min: min, 
    max: max, 
    avg: avg };
}
console.log(getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10));  // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5));  // { min: 5, max: 5, avg: 5 }

// Задача №2 Насадки преобразователи:
// 1.Насадка суммирования элементов

function summElementsWorker(...arr) {
	if (arr.length > 0) {
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum;
	} else {
		return 0;
	}
}
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

// 2.Насадка вычисления разницы максимального и минимального элементов

function differenceMaxMinWorker(...arr) {
	if (arr.length > 0) {
		let min = Infinity;
		let max = -Infinity;
		for (let i = 0; i < arr.length; i++) {
			if (min > arr[i]) {
				min = arr[i];
			}
			if (max < arr[i]) {
				max = arr[i];
			}
		}
		return max - min;
	} else {
		return 0;
	}
}
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

// 3.Насадка вычисления разницы сумм чётных и нечётных элементов

function differenceEvenOddWorker(...arr) {
	if (arr.length > 0) {
		let sumEvenElement = 0;
		let sumOddElement = 0;
		for (let i = 0; i < arr.length; i++) {
			if ((arr[i] % 2) === 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		}
		return sumEvenElement - sumOddElement;
	} else {
		return 0;
	}
}
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

// 4.Насадка вычисления среднего значения чётных элементов

function averageEvenElementsWorker(...arr) {
	if (arr.length > 0) {
		let sumEvenElement = 0
		let countEvenElement = 0
		for (let i = 0; i < arr.length; i++) {
			if ((arr[i] % 2) === 0) {
				sumEvenElement += arr[i];
				countEvenElement += 1
			}
		}
    return sumEvenElement / countEvenElement;
	} else {
		return 0;
	}
}
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38

// Задача №3 Агрегатор преобразователей

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const arr = func(...arrOfArr[i]);
    if (arr > maxWorkerResult) {
      maxWorkerResult = arr;
    }
  }

  return maxWorkerResult;
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72