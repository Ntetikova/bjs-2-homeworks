"use strict"
// 1.Программа для решения квадратных уравнений (ax² + bx + c = 0):

function solveEquation(a, b, c) {

  let arr = []; 
  let x;
  const D = Math.pow(b, 2) - 4 * a * c;
  if (D > 0 ) {
    x = (-b + Math.sqrt(D) )/(2*a);
    arr.push(x);
    x = (-b - Math.sqrt(D) )/(2*a);
    arr.push(x);
  } else if (D === 0) {
   x = -b/(2*a);
   arr.push(x);
  } 
   return arr;
}
console.log(solveEquation(1, 2, 1));

// 2.Кредитный калькулятор:  

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	const P = percent / 100 / 12;
	const S = amount - contribution;
	const n = countMonths;
	const monthPayment = S * (P + P / (Math.pow(1 + P, n) - 1));
	const totalAmount = (monthPayment * n).toFixed(2);
	let pay = Number(totalAmount);
	return pay;
}
console.log(`Общая сумма выплат: ${(calculateTotalMortgage(10, 0, 50_000, 12))}`);