
// var div = document.createElement('div');

// div.id="first_container";


var container = document.getElementById("first_container");
 
var paragraph = document.createElement("p");

container.appendChild(paragraph);

paragraph.innerHTML = "Hello there.This is a new paragraph that is created via DOM";


paragraph.id="lastname";


paragraph.dataset.id="spaces";