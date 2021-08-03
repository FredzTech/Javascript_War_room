// MAP METHOD
//==================
// It is like looking over the whole array to find what you want using the callback function&a new reference name(Which in this case is the word "name").
// It returns a new array (hapa ni newKenya.)
// It does not change the size of the original array.It just uses values from the original array when making the new 
//one bana (which in this case we have created new array called newKenya). 


const Kenya=[
    {
        Number: 01,
        County:"Mombasa",
        Population:1208333,
    },
   
    {
        Number: 02,
        County:"Kilfi",
        Population:1453787,
    },
    {
        Number: 03,
        County:"Meru",
        Population:1545714,
    },
    {
        Number: 04,
        County:"Kiambu",
        Population:2417735,
    },
    {
        Number: 05,
        County:"Kakamega",
        Population:1867579,
    },
    
];

console.log(Kenya);
//Returns the whole Array which contains Objects.....And each object is like a member of the Array.
//The map method scrutinizes each member to find the property that you are looking for and returns them as a new Array.

// USING THE MAP ARRAY METHOD TO MANIPULATE THE OBJECT ABOVE WHICH CONTAINS A LIST OF COUNTIES SASA IN THIS //

let newKenya=Kenya.map((name)=> { return name.County.toUpperCase() +' '+'COUNTY which has a population of '+ name.Population+' '+'people'.toUpperCase()});

// console.log(typeof(newKenya));

let another_one=Kenya.map((counties)=>counties.Number+" "+counties.County);

console.log(another_one);

let county_1=Kenya.map((c_name)=>{
    return c_name.Number;

})

console.log(county_1);