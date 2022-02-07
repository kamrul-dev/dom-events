function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle blue button click by setting funciton name

const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}