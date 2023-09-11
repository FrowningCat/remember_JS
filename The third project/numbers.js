const num = 24 // integer
const float = 42.42 // float
const pow = 10e3
const big = 1_000_000_000

// console.log(Number('42'))
// console.dir(Number)

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Math.pow(2, 53) - 1)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(1 / 0)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.isFinite(1 / 0))

// const weird = 23 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(12))

const strInt = '42'
const sftFlout = '42.42'

// console.log(Number(strInt))
// console.log(Number(sftFlout))
// console.log(Number.parseInt(strInt))
// console.log(parseInt(strInt))
// console.log(parseInt(sftFlout))
// console.log(parseFloat(sftFlout))
// console.log(+strInt, +sftFlout)
// console.log(0.1 + 0.2)
// console.log(+(0.1 + 0.2).toFixed(1))


//BigInt
// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 94224980n)
// console.log(-42n)

// console.log(-42.42n) // error
// console.log(20n - 1) // error

// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n)

// Math
// const myNam = 4.9

// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(25))
// console.log(Math.pow(2,3))
// console.log(Math.abs(-42))
// console.log(Math.max(2, 5 ,42, 199, 0))
// console.log(Math.min(2, 5 ,42, 199, 0))
// console.log(Math.floor(myNam))
// console.log(Math.ceil(myNam))
// console.log(Math.round(myNam))
// console.log(Math.trunc(myNam))
// console.log(Math.random())

// function getRandomNumber(min, max) {
// 	return Math.random() * (max - min - 1) + min
// }
// const num1 = getRandomNumber(10, 100)
// console.log(num1)