// Event Loop
// setTimeout(() => {
// 	console.log('after 2 sec')
// }, 2000)

// const timeout =  setTimeout(() => {
// 	console.log('after 2 sec')
// }, 2000)
// clearTimeout(timeout)

// setInterval (() => {
// 	console.log('tick')
// }, 1000)

// function delay(callback, time = 1000) {
// 	setTimeout(callback, time)
// }
// delay(() =>{
// 	console.log('tick')
// })

const daley = (time = 1000) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			// resolve([1, 2, 3])
			reject('error in dalay')
		}, time)	
	})
	return promise
}

// daley(2500).then(() => {
// 	console.log('tick')
// })

// daley(2500).then((data) => {
// 	console.log('tick', data)
// 	return data.map((x) => x ** 2)
// }).then((data) => {
// 	console.log(data)
// })

// daley(2500).then((data) => {
// 	console.log('tick', data)
// 	return data.map((x) => x ** 2)
// }).then((data) => {
// 	console.log(data)
// }).catch((err) => {
// 	console.log(err)
// }).finally(() => {
// 	console.log('Finally')
// })

// const getData = () => new Promise((resolve) => resolve([1, 2, 3]))

// async function asyncExample() {
// 	try {
// 		await daley(3000)
// 		const data = await getData()
// 	} catch (err) {
// 		console.log(err)
// 	} finally {
// 		console.log('Finally')
// 	}
// }
// asyncExample()