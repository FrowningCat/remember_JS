/* Can do
let nam = 42 --> number
const isProgrammer = true --> boolean
let $ = 'test' --> string
let $num = 42
let num$ = 42
let _ = 49
let _num = 12
let num_ = 13
let firstName = 'Vladislav' // good
let first_name = 'Max' // bad
let nem42 = 42 
*/

/* Restricted
let 42num = 42
let first-name = 'Oleg'
let false = 21
let const = 21
let let = 21
*/

// firstName = 'Max' --> ok
// isProgrammer = false --> error because of const

/* Conclusion
alert(nam)
console.log(nam)
*/

/* Mathematics
console.log(num + 10)
console.log(num - 10)
console.log(num * 10)
console.log(num / 10)
console.log(num)

let num2 = num + 10
console.log(num, num2)

num = num2 - num
console.log(num, num2)

let num3 = (num + 10 * 2) / (5 - 1)
console.log(num3)

const fullName = firstName + 'Savinkov'
const fullName = firstName + ' ' + 'Savinkov'
const fullName = firstName + '\n' + 'Savinkov'
console.log(fullName)
*/

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

plusBtn.onclick = function(){
	action = '+'
}

minusBtn.onclick = function(){
	action = '-'
}

function printResult (result){
	// if (result < 0) {
	// 	resultElement.style.color = 'red'
	// } else {
	// 	resultElement.style.color = 'green'
	// }

	result < 0 ? resultElement.style.color = 'red' : resultElement.style.color = 'green'
	
	resultElement.textContent = result
}

function computeNambersWithAction (inp1, inp2, actionSymbol){
	const num1 = Number(inp1.value)
	const num2 = Number(inp2.value)
	// if (actionSymbol == '+'){
	// 	return num1 + num2
	// } else {
	// 	return num1 - num2
	// }

	return actionSymbol == '+' ? num1 + num2 : num1 - num2

}

submitBtn.onclick = function(){
	const result = computeNambersWithAction(input1, input2, action)
	printResult(result)
}