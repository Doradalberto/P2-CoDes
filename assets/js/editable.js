function before() {
	let test = document.querySelector('.test')
	test.classList.add('hidden')

	let load = document.querySelector('.load')
	load.classList.remove('hidden')
}


function after() {
	let load = document.querySelector('.load')
	load.classList.add('hidden')

	let test = document.querySelector('.test')
	test.classList.remove('hidden')

	test.innerHTML = 'conexão funcionando!'
}
