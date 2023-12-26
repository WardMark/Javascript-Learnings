// Query selector for the DOM
document.querySelector('p');

// Select an element by its id, which is 'bio'
document.getElementById('bio').innerHTML = 'The description';


// These next 2, by class name & tag name return arrays, so one has to specify which item to manipulate
// Set first element of .student class as 'Not yet registered'
document.getElementsByClassName('student')[0].innerHTML = 'Not yet registered';

// Set second <li> tag as 'Cedric Diggory'
document.getElementsByTagName('li')[1].innerHTML = 'Cedric Diggory`;

// How to style an element
document.querySelector('.blue').style.fontFamily = 'Roboto';
// Not the property does not contain hyphens, just camelCase

// Getting parent or child nodes of an element:
<ul id='groceries'>
  <li id='must-have'>Toilet Paper</li>
  <li>Apples</li>
  <li>Chocolate</li>
  <li>Dumplings</li>
</ul>

let parentElement = document.getElementById('must-have').parentNode; // returns <ul> element
let childElements = document.getElementById('groceries').children; // returns an array of <li> elements

// Creates a new empty element
let paragraph = document.createElement('p');
paragraph.id = 'info'; 
paragraph.innerHTML = 'The text inside the paragraph';
document.body.appendChild(paragraph); //this actually adds it to the webpage

let paragraph = document.querySelector('p');
document.body.removeChild(paragraph); //this removes the paragraph
// Or instead of removing, you can set its hidden property to true
document.getElementById('sign').hidden = true; 



