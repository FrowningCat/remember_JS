const names = ['Vlad', 'Dima', 'Ylia', 'Oleg']

// names.push('Ira')
// names.unshift('Gleb')

// const namee = names.shift()
// const nameer = names.pop()

// console.log('Names: ', names, namee, nameer)

// console.log(names.reverse())
// console.log(names)

// console.log(names.toReversed())
// console.log(names)

// console.log(names.sort())
// console.log(names)

// console.log(names.toSorted())
// console.log(names)

// console.log(names.splice(1, 2))
// console.log(names)

// console.log(names.toSpliced(1, 2))
//  console.log(names)

// const grateName = 'Oleg'
// const index = names.indexOf(grateName)
// names[index] = 'Oleg S'
// console.log(index)
// console.log(names[index])
// console.log(names)

// const grateName = 'Oleg'
// const index = names.indexOf(grateName)
// console.log(index)
// const newNames = names.with(index, 'Oleg S')
// console.log(names, newNames)

// const capitalNames = names.map(function(name) {
// 	return name.toLowerCase()
// })
// console.log(names, capitalNames)

// const capitalNames = names.map(function(name, index) {
// 	if (index == 1){
// 		return 'Gg'
// 	}
// 	return name
// })
// console.log(names, capitalNames)

// console.log(names.indexOf('Oleg') !== -1)
// console.log(names.includes('Oleg'))

const people =[
	{name: 'Vlad', budget: 2900},
	{name: 'Oleg', budget: 300000},
	{name: 'Ira', budget: 100000},
	{name: 'Ylia', budget: 20000}
]

// let findedPeople
// for (let person of people){
// 	if (person.budget == 20000){
// 		findedPeople = person
// 	}
// }
// console.log(findedPeople)

// const findedPeople = people.find(function(person) {
// // 	if (person.budget == 20000){
// // 		return true
// // 	}
// 	return person.budget == 20000
// })
// console.log(findedPeople)

// const finded = people.find((p) => p.budget = 20000)
// console.log(finded)

// const findedPeople = people.findIndex(function(person) {
// 	return person.budget == 20000
// })
// console.log(findedPeople)

// const filder = people.filter(function(person) {
// 	return person.budget > 20000
// })
// console.log(filder)

// let sumBudget = 0
// const filder = people.filter(function(person) {
// 	return person.budget > 20000
// })
// console.log(filder)
// filder.forEach(function(person) {
// 	sumBudget = sumBudget + person.budget
// })
// console.log(sumBudget)

// const byBudget = (p) => p.budget > 20000
// const pickBudget = (p) => p.budget
// const sumRich = people
// 	.filter(byBudget)
// 	.map(pickBudget)
// 	.reduce((acc, p) => acc + p, 0)
// console.log(sumRich)

const string = 'Hi, world !'

// const reversed = string.split(',')
// console.log(reversed)


// const reversed = string.split('').toReversed().join('')
// console.log(reversed)

// const reversed = string
// 	.split('')
// 	.toReversed()
// 	.join('!')
// 	.split('')
// 	.filter((c) => c != '!')
// 	.join('')
// console.log(reversed)