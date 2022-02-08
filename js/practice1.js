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