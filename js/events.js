function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle blue button click by setting funciton name

const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//===================================================================

// handle event using anonymous function
const greenButton = document.getElementById('make-green-button');

// anonymous fuction
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

//===================================================================

// handle by using addEventListener
const goldenButton = document.getElementById('make-golden-rod');
goldenButton.addEventListener('click', makeGoldenRod)

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

//================================================================

// addEventListener
const hotPinkButton = document.getElementById('make-hot-pink');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

//================================================================================
// direct shortcut

document.getElementById('make-light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})