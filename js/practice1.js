//way 2: to add onclick event handler using onclick function call
function makeBlueButton() {
    document.body.style.backgroundColor = 'blue';
}

// way 3: to add onclick event handler using function name and id selector
const Indigobutton = document.getElementById('make-indigo');
Indigobutton.onclick = makeIndioColor;
function makeIndioColor() {
    document.body.style.backgroundColor = 'indigo';
}

// way 4: to add onclick event handler using anonymous function and id selector

const redButton = document.getElementById('make-red');
redButton.onclick = function () {
    document.body.style.backgroundColor = 'red';
}

// way 5: to add click event handler using addEventListener using function and id selector

const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', makeGreen);
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// way 6: to add click event handler using addEventListener using function and id selector short way

const yellowButton = document.getElementById('make-yellow');
yellowButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'yellow';
})

// way 7: to add click event handler using addEventListener using function and id selector , (direct short way and it will be used most of the cases)

document.getElementById('make-orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
})

//=========================More Event Practice=====================================================

// delete secret info after clicking the delete button

document.getElementById('delete-btn').addEventListener('click', function () {
    document.getElementById('secret-info').style.display = 'none';
})

// apply 'focus' event using addEventListener in input field;
document.getElementById('input-field').addEventListener('focus', function () {
    document.body.style.backgroundColor = 'lightblue';
})

//apply 'blur' event using addEventListener in input field
document.getElementById('input-field').addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
})

//apply 'keydown' event using addEventListener in input field
/* document.getElementById('input-field').addEventListener('keydown', function(){
    const inputField = document.getElementById('input-field');
    console.log(inputField.value);
}) */

//apply 'keypress' event using addEventListener in input field
/* document.getElementById('input-field').addEventListener('keypress', function(){
    const inputField = document.getElementById('input-field');
    console.log(inputField.value);
}) */

//apply 'keyup' event using addEventListener in input field
/* document.getElementById('input-field').addEventListener('keyup', function () {
    const inputField = document.getElementById('input-field');
    console.log(inputField.value);
}) */





// If you write 'delete' word in iput field then the delete button will be enable and we delete the content.
document.getElementById('input-field').addEventListener('keyup', function (event) {
    const deleteButton = document.getElementById('delete-btn');
    if (event.target.value == 'delete') {
        deleteButton.removeAttribute('disabled');
    }
    else {
        deleteButton.setAttribute('disabled', true);
    }
})

// apply 'change' event using addEventListener in input field
document.getElementById('input-field').addEventListener('change', function () {
    const deleteField = document.getElementById('input-field');
    console.log(deleteField.value);

})

// ===========================Event Bubble===============================================

// click second li
document.getElementById('second-li').addEventListener('click', function (event) {
    console.log('second li clicked');
    // event.stopPropagation();
    event.stopImmediatePropagation();
});
document.getElementById('second-li').addEventListener('click', function () {
    console.log('second 1 li clicked');
});
document.getElementById('second-li').addEventListener('click', function () {
    console.log('second 2 li clicked');
});
document.getElementById('second-li').addEventListener('click', function () {
    console.log('second 3 li clicked');
});

// click ul
document.getElementById('ul-click').addEventListener('click', function () {
    console.log('ul clicked');
});

// section click
document.getElementById('section-click').addEventListener('click', function () {
    console.log('section clicked');
});


//==========================Most Common Way To Handle the Event==============================

//just function
function justFunction() {
    const justFunc = document.getElementById('add-para');
    justFunc.innerText = 'by just function';
};

// dircet event by addEventListener
document.getElementById('direct-add').addEventListener('click', function () {
    const addEventDirect = document.getElementById('add-para');
    addEventDirect.innerText = 'set by direct add event';
});

// data show from input field
document.getElementById('upadate-btn').addEventListener('click', function (event) {

    // catch input value
    const inputData = document.getElementById('input-data');

    // show input value in p tag
    const inputShow = document.getElementById('add-para');
    inputShow.innerText = inputData.value;
    inputData.value = '';
});

// create list using DOM
document.getElementById('list-btn').addEventListener('click', function () {
    const ulItem = document.getElementById('list-item');
    const li = document.createElement('li');
    li.innerText = 'list item';
    ulItem.appendChild(li);

});


// create a input field and set default value 0. then increase by 1. when input field increased till the 5 value then the button will be disabled.

const getInput = document.getElementById('increase-value').setAttribute('value', '0');
let count = 0;
function increaseNumber() {
    count = count + 1;
    if (count == 5) {
        const buttonElement = document.getElementById('add-disabled');
        buttonElement.setAttribute('disabled', true);
    }
    const getInput = document.getElementById('increase-value');
    const getValue = getInput.value;
    getInput.value = count;
}


