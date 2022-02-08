//way 2: to add onclick event handler using onclick function call
function makeBlueButton(){
    document.body.style.backgroundColor = 'blue';
}

// way 3: to add onclick event handler using function name and id selector
const Indigobutton = document.getElementById('make-indigo');
Indigobutton.onclick = makeIndioColor;
function makeIndioColor(){
    document.body.style.backgroundColor = 'indigo';
}

// way 4: to add onclick event handler using anonymous function and id selector

const redButton = document.getElementById('make-red');
redButton.onclick =  function (){
    document.body.style.backgroundColor = 'red';
}

// way 5: to add click event handler using addEventListener using function and id selector

const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})

