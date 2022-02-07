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