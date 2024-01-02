// Modules in JavaScript; export and import keywords
// Modules are reusable pieces of code in a file that can be exported and then imported for use in another file.
// Key for Separation of Concerns

// Two different ways for exporting and importing, depending on usage:
// The Node runtime environment uses the module.exports and require() syntax.
// The browser’s runtime environment uses the ES6 import/export syntax.

// In a browser scenario, functions can be exported from a file/module at the bottom of the module:
export { resourceToExportA, resourceToExportB, ...};

// In addition to the syntax above, in which all named exports are listed together, 
// individual values may be exported as named exports by simply placing the export keyword in front of the variable’s declaration.
export const toggleHiddenElement = (domElement) => {
  // logic omitted...
}
export const changeToFunkyColor = (domElement) => {
  // logic omitted...
}

// And here is the import syntax to be put at the top of a file where you'd like to use the exports:
import { exportedResourceA, exportedResourceB } from '/path/to/module.js';

// When using exports in a javascript script tag, must add a type="module" attribute!
<script type="module" src="./secret-messages.js"> </script>

// You can also rename imports if there would be duplicates:
import { greet as greetEspanol } from 'greeterEspanol.js';
import { greet as greetFrancais } from 'greeterFrancais.js';
greetEspanol(); // Prints: hola
greetFrancais(); // Prints: bonjour

// It is also possible to export/import everything from a module as default object instead of individually
const resources = { 
  valueA, 
  valueB 
}
export { resources as default }; 
// Shorthand version: 
export default resources;

// Importing a default object would look like this:
import importedResources from 'module.js';

// It should be noted that if the default export is an object, the values inside cannot be extracted until after the object is imported:
import resources from 'module.js'
const { valueA, valueB } = resources;

// Let’s return to the prior example. The dom-functions.js module from above could be rewritten to use default exports like so:
/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;   
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}
const resources = { 
  toggleHiddenElement, 
  changeToFunkyColor
}
export default resources;

//This default exports object can now be used within secret-messages.js like so:
import domFunctions from '../modules/dom-functions.js';
const { toggleHiddenElement, changeToFunkyColor } = domFunctions;

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

