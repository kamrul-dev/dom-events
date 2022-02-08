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
greenButton.addEventListener('click', makeGreen);
function makeGreen(){
    document.body.style.backgroundColor = 'green';
}
    
// way 6: to add click event handler using addEventListener using function and id selector short way

const yellowButton = document.getElementById('make-yellow');
yellowButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow';
})

// way 7: to add click event handler using addEventListener using function and id selector , (direct short way and it will be used most of the cases)

document.getElementById('make-orange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
})

//=========================More Event Practice=====================================================

// delete secret info after clicking the delete button

document.getElementById('delete-btn').addEventListener('click', function(){
    document.getElementById('secret-info').style.display = 'none';
})

// apply focus event using addEventListener in input field;
document.getElementById('input-field').addEventListener('focus', function(){
    document.body.style.backgroundColor = 'lightblue';
})