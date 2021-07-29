// NOTES 
/*For the arrow functions,if you only have one statement and it returns a value, you can skip both the curly braces and the return keyword as arrow functions return a value by default.
If you only have one parameter,you can also skip including the brackets you just put the value*/

var old;

old=function greetings (){
   return( "Hello there I want to modify this to an arrow function");
};

console.log(old);


var Greetingz=()=>{console.log("Just recaping my memory on arrow functions")};

console.log(typeof(Greetingz));
Greetingz();

//FUNCTIONS WITH PARAMETERS
var addition = (a,b)=> a+=b;

console.log(addition(543,57));
