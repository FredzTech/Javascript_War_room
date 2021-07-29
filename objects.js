const sunrise ={
    name:'sunrise Residentuals',
    type:'student Hostels',
    rooms:'double/Single rooms',
    summary:function(){
      return this.name+" "+"has"+this.rooms+"available for renting and is purely for the students" }
};

// console.log(sunrise.summary());

//ASSIGNING NEW PROPERTIES TO THE FUNCTION
sunrise.age=function(){
   let ag= prompt("How old are you?");
  return "This guy is"+" "+ag+" " +"years old";
};


// document.write(sunrise.age());
// let newdiv=document.getElementById('newd');
let newdiv=document.createElement('div');
console.log(newdiv);
let newpar=document.createElement('p');
newdiv.appendChild(newpar);
let txt=document.createTextNode(sunrise.age());
console.log(txt);

newpar.appendChild(txt);
console.log(newpar);
// newdiv.appendChild(newpar);











console.log(txt);


// let body=document.getElementsByTagName('body');

// body.innerHTML=newdiv;





//SHORT NOTES ON OBJECTS
/*
 * Declared in property:value pairs
 * Methods are actions that are simply performed on this objects 
 * When the this keyword is used when writing an object it simply refers to the owner of this functions
 * A method is simply a function that is owned by this object maze.
 * Therefore all the syntax of creating a function applies and that is all that you need to know for now
 * When you want to reference a certain object property/method.Just use (Objectname.property/method().
 * You can also assign new properties to the object by referencing it first the assigning the new property
   as shown above.
 * You can also try to play with the functions maze you see if you can be able to collect pieces of data 
   and store them in that particular box.
 * You can call the function by just referencing it...Wherever it is reference it is called....even if it is
   inside a console.log statement.

 */
