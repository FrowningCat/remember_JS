const person = {
	name: 'Vlad',
	age: 22,
	isProgammer: true,
	languages: ['ru', 'en'],
	address: {
		city: 'Mosckow',
		street: 'Gdeto',
	},
	'comlex key': 'complex',
	[1 + 2]: 'computed value',
	[new Date().getTime()]: 'time',
	greet() {
		console.log('Tekst', this)
	},
	arrow: () => {
		console.log('Vlad S', this)
	},
	info() {
		console.log(this)
		console.log('Person name', this.name)
	},
}

// console.log(person)
// person.arrow()
// person.info()
// person.greet()

// console.log(person.address)
// console.log(person['address'])
// console.log(person['comlex key'])

// const adressKey = 'address'
// console.log(person[adressKey])

// person.age++
// console.log(person.age)

// person.languages.push('de')
// console.log(person.languages)

// person.address = undefined
// console.log(person)

// delete person.address
// console.log(person)

// Destructoring
// const age = person.age
// const name = person.name
// console.log(age, name)

// const {age, name, languages} = person
// console.log(age, name, languages)

// const name = 'Oleg'
// const {age, name: firstName = 'TEST', languages} = person
// console.log(age, firstName, languages)

// for (let key in person) {
// 	// console.log(key)
// 	if (person.hasOwnProperty(key)){
// 		console.log(person[key])
// 	}
// }

// Object.keys(person).forEach((key) => {
// 	console.log(person[key])
// })

const logger = {
	keys(withText = true) {
		if (withText){
			console.log('object keys: ', Object.keys(this))
		} else {
			console.log(Object.keys(this))
		}
	},

	keysAndValues() {
		Object.keys(this).forEach((key) => {
			console.log('key', key)
			console.log('value: ', this[key])
		})
	},
}


// const bound = logger.keys.bind(person, false)
// bound()
// bound(false)

// logger.keys.call(person, true)
// logger.keys.apply(person, [false])

// logger.keysAndValues()

// Class
// class Human {
// 	static isHumen = true

// 	humenGreet() {
// 		console.log('greet from humen')
// 	}
// }

// class Person extends Human{
// 	constructor(name, age) {
// 		super()
// 		this.name = name ?? 'Undefined name'
// 		this.age = age ?? 'Undefined age'
// 	}

// 	sayHello(){
// 		console.log('Hello from ', this.name)
// 	}
// }

// const newPerson1 = new Person('Vlad', 21)
// const newPerson2 = new Person('Oleg', 45)

// // newPerson1.sayHello()
// // newPerson2.sayHello()

// console.log(newPerson1.isHumen)