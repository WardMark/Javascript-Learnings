// After a specific event fires on a specific element in the DOM, 
// an event handler function can be created to run as a response.

// The addEventListener takes in two arguments, the event name as a string & an event handler function
// It's best to use a defined function for the event handler function for better readability & reusability

function showInfo(){
  moreInfo.style.display = 'block';
}
readMore.addEventListener('click', showInfo);
// In the above case the moreInfo block is hidden until the readMore button is clicked

/* Event Handlers can also be registered by setting an .onevent property on a DOM element (event target).
  The pattern for registering a specific event is to append an element with .on followed by the lowercased event type name.
  For instance, if we want to register a click event with this pattern, we would write: */
readMore.onclick = showInfo;

// How to remove an event listener after it's no longer needed
eventTarget.removeEventListener('click', eventHandlerFunction);
// Event listeners assigned anonymous functions cannot be removed!!

// Below shows how to make an element go up and down based on pressing and releasing keyboard keys
let ball = document.getElementById('float-circle');
function up(){
  ball.style.bottom = '250px';
}

function down(){
  ball.style.bottom = '50px';
}
document.onkeydown = up;
document.onkeyup = down;

