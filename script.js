const redBtn = document.querySelector('#btn1')
const blueBtn = document.querySelector('.btn2')
const square = document.querySelector('.color')
const removeColorBtn = document.querySelector('.remove-color')

function redColor() {
	// square.classList.add('red')
	// square.classList.remove('blue')
    square.classList.toggle('red')
}

function blueColor() {
	// square.classList.add('blue')
	// square.classList.remove('red')
    square.classList.toggle('blue')
}


function deleteColor() {
	square.classList.remove('red')
	square.classList.remove('blue')
}

redBtn.addEventListener('click', redColor)
blueBtn.addEventListener('click', blueColor)
removeColorBtn.addEventListener('click', deleteColor)
