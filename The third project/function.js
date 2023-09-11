// Function Declaretion
// greet('Vlad')

// function greet(name) {
// 	console.log('Hello - ', name)
// }

// Function Expression
// const greet2 = function(name) {
// 	console.log('2 Hello - ', name)
// }

// greet2('Vlad')

// console.log(typeof greet)

// setTimeout(greet, 1500)
// setTimeout(function() {
// 	greet('Vlad')
// }, 1500)

// let counter = 0
// const intervsl = setInterval(function() {
// 	if (counter == 5){
// 		clearInterval(intervsl)
// 	} else {
// 		console.log(++counter)
// 	}
// }, 1000)

// Arrow Function
// function greet(name) {
// 	console.log('Hello - ', name)
// }

// const arrow = (name, age) => {
// 	console.log('Hello - ', name, age)
// }
// arrow('Vlad', 22)

// const arrow = (name, age) => console.log('Hello - ', name, age)
// arrow('Vlad', 22)

// const arrow = name => console.log('Hello - ', name)
// arrow('Vlad')

// ------------------------------------------------------

// function pow(num, exp) {
// 	return Math.pow(num, exp)
// }
// console.log(pow(2, 8))

// const pow2 = (num, exp) => Math.pow(num, exp)
// console.log(pow2(2, 8))

// Default Parameters
// const sum = (a = 2, b = a / 2) => a + b
// console.log(sum(40, 2))
// console.log(sum(40))
// console.log(sum())
// function sumAll(...numbers) {
// 	// let res = 0
// 	// for(let num of numbers){
// 	// 	res = res + num
// 	// }
// 	// return res
// 	return numbers.reduce((acc, cur) => (acc += cur),0)
// }
// console.log(sumAll(1, 2, 3, 4, 7))

// Closures
// function createPerson(name) {
// 	return function(lastName){
// 		console.log(name + ' ' + lastName)
// 	}
// }

// const addLastName = createPerson('Vlad')
// addLastName('Savinkov')
// addLastName('Petrov')