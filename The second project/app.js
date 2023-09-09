/* Theory arrau
	const arrau = [1, 2, 3, 4]
	const arrauString = ['a', 'b', 'c', 12, null]
	const array = new Array(1, 2, 3, 4)
	console.log(array)
	console.log(array[0])
	console.log(array[array.length -1 ])
	array[0] = 'Word'
*/

/* Object Theory
	const person = {
		firsName: 'ddd',
		lastName: 'vvv',
		age: 1921,
		hasGerl: True}
		lang: ['ru', 'en']
	}

	consol.log(person.age)
	consol.log(person['lang'])
*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = [{
	title: 'efsd',
	completed: false,
	}, 
	{
	title: 'gyu',
	completed: true,
	}
]

function render(){
	// for (let note of notes){
	// 	listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
	// }

	listElement.innerHTML = ''
	if (notes.length === 0)
	{
		listElement.innerHTML = '<p>Нет эллементов</p>'
	}
	for (let i = 0; i < notes.length; i++){
		listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
	}
}

listElement.onclick = function(event){
	if (event.target.dataset.index){
		const index = parseInt(event.target.dataset.index)
		const type = event.target.dataset.type

		if (type === 'toggle'){
			notes[index].completed = !notes[index].completed
		} else if (type === 'remove'){
			notes.splice(index, 1)
		}

		render()
	}
}

render()

function getNoteTemplate(note , index){
	return`
		<li
			class="list-group-item d-flex justify-content-between align-items-center"
		>
			<span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
			<span>
				<span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}"
				data-index="${index}" data-type="toggle">&check;</span>
				<span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
			</span>
		</
	`
}

createBtn.onclick = function(){
	if (inputElement.value.length === 0){
		return
	}
	const newNote = {
		title: inputElement.value,
		completed: false,
	}
	notes.push(newNote)
	render()
	inputElement.value = ''
}