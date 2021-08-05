var profiling={
    names:"Gichia Alfred Githinji",
    age:"18 Years",
    countyOfResidence:"Kiambu County"
}; 

const{ names:SML, countyOfResidence:mCounty}=profiling;
// console.log(SML,mCounty);
// console.log(SML,mCounty);

// Just messing around with the type of kerea that i found

// console.log(typeof(age));


//DESTRUCTURING ARRAYS
//========================

const furniture=['table','television','fridge','dispenser','Microwave'];


const [reading_Item,watching_Item]=furniture;
const [read_Item,watch_Item,...rest]=furniture;
console.log(reading_Item);//or the read Item
console.log(watching_Item);//or the watch Item
console.log(rest);

//As for the arrays destrucuturing them is quite easy as baptising them with new names you just have to write them while destructuring



// ADDING NO'S INSIDE AN ARRAY.
//=================================
/*
let numbers = [0,10,20,30,40,50];
let answer = 0;
let response = numbers.forEach((number)=>{
     answer += number;
     console.log( answer );
 });

 */

// KUKAGUA MALI.
//===============
// let [a,b,c,d,e,f] = numbers;

/* console.log (a,b,c,d,e,f);//Displaying the variables themselves.

  console.log({a,b,c,d,e,f});//Grouping the variables into a new object with key:value pairs 

 console.log([a,b,c,d,e,f]);//Grouping the variable back to an array. */