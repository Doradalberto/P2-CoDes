document.addEventListener('DOMContentLoaded', function() {
	let test = document.querySelector('.test')

	test.addEventListener('click', function() {
		before()

		setTimeout(after, 2000)
	})
})
