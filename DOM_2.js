//CREATION OF THE DOCUMENT TEXT NODE.
//====================================
let h_1 = "AGE";
let q_1 = prompt("What is your age?");
let p_1 = "Your are" + " " + q_1 + " " + "years old";

console.log(h_1, p_1);

//GETTING TO THE PARENT ELEMENTS.
//===============================

let head = document.getElementById("heading-1");
console.log(head);
//CREATING THE TEXT NODE.
//=======================

let txtNode = document.createTextNode(h_1);
console.log(txtNode);
//APPENDING THE TXTNODE CREATED TO THE PARENT ELEMENT.
//=====================================================
head.appendChild(txtNode);
console.log(head);

//GETTING TO THE PARENT ELEMENTS.
//================================

let par = document.getElementById("paragraph-1");
//CREATING THE TEXT NODE.
//========================

let txtNode_2 = document.createTextNode(p_1);
console.log(txtNode_2);
//APPENDING THE TXTNODE CREATED TO THE PARENT ELEMENT.
//====================================================

par.appendChild(txtNode_2);
console.log(par);

console.log(typeof txtNode_2);

//MANIPULATING THE DOM STYLES VIA CSS
//====================================

par.style.color = "red";

head.style.textDecoration = "overline underline";

let body = document.getElementsByClassName("bd");
head.style.background = "rgba(0,0,0,0.2)";

//  NOTES.
//=========
/*It seems that also the arrangement matters when it comes to the manipulations of the DOM 
  You must like finish everything for one element b4 going to the next 
  You can use let/var doesn't really matter since that is just a container for your information
  WHAT REALLY MATTERS IS THE ARRANGEMENT &LOCATION OF YOUR SCRIPT TAG...IF YOU FUCK IT UP IT WILL DO THE SAME TO YOU MEHN
  The script tag must be at the bottom for your DOM properties to work it seems....and it is always what has been resulting into 
  all those errors.
  The .innerHTML property kinda converts your text to object..Therefore just use .appendChild unless 
  otherwise advised.
  For the .innerHTML property to work well as it should instead of returning [Object Text],assign the string directly 
  as it is without converting it to a text node first*/
