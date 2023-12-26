// Assigning an 'onclick' property
let element = document.querySelector('button');

element.onclick = function() { 
  element.style.backgroundColor = 'blue' 
};

// or can assign the onclick a named function
let element = document.querySelector('button');
function turnBlue() {
   element.style.backgroundColor = 'blue';
}

element.onclick = turnBlue;
