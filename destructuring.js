//These is how we destructure objects but we can also destructure arrays.The only syntax that changes is the curly braces where we swap it for the square brackets
var profiling={
    names:"Gichia Alfred Githinji",
    age:"18 Years",
    countyOfResidence:"Kiambu County"
};  

//ANCIENT METHODS

var names=profiling.names;
var age=profiling.age;
var county=profiling.countyOfResidence;

console.log(names,age,county);


//MODERN METHODS(DESTRUCTURING)
//==================================
// Instead of doing the above shit we can destructure this data making it even sweeter and much easier to work with
//When it comes to destructuring we can do it in any order azn you must not fuatanisha the properties as they appear 
var {names, age,countyOfResidence}=profiling;
console.log(names,age,countyOfResidence);


//SIMPLE NOTES
//===============
// const/let keywords can also work but now in this circumstance huwezi change the 
//data anytime soon and maybe when you come to think of it,it is better to declare your objects with the const keyword to avoid overwriting of this kinda data.//

// var {names,age,countyOfResidence}=profiling;

// console.log(names,age,countyOfResidence);



//SWAPPING VARIABLE NAMES 
//==============================
// You can also assign this data to new variable names.


let {names:nm,age:yrs,countyOfResidence:residential}=profiling;

console.log(nm,yrs,residential);




// SETTING UP DEFAULTS
//=======================
/*Setting up default values for your variables helps to  avoid returning undefined.
 Its difference with now swapping the  variable names is that here we are using the equal sign operator
instead of the colon operator*/

var {names="JUDY",age="15",countyOfResidence="Kenya",Religion="Christianity"}=profiling;

console.log(names,age,countyOfResidence,Religion);




