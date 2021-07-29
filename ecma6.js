// Basic Javascript Stuff
// var i =6;

// console.log(i);

// // THe for loop reminder

// function iteration(){
//     for(var r=2 ;r<6 ;r++){
//         console.log(r);
//     }
// };

// iteration();

// THe const keyword and how it cannot be altered
// const gender="female";
// console.log(gender);

// gender="male"
// console.log(gender); /* =>These brings an error message basically meaning that a const cannot be altered */


//  OBJECTS

// const person ={
//     name:"Josh",
//     gender:"Male",
//     email:"josh17@gmail.com", 
//     weight(){
//         console.log(this);
//     }
// };


// person.weight() /*In these case the this keyword has returned to as a reference to the current object which in this case is the person object  */
// console.log(person)

// person.gender="female";

// console.log(person);

// person.yearOfBirth=2003;
// console.log(person);


// const wolve =person.weight.bind(person);

// wolve();


// ARROW FUNCTIONS
// Old way of Defining a Function
// const square = function(number){
//     return number*number;
// }

// console.log(square(25));


// // The new way in Ecma6
// const rectangle = number => number*number

// console.log(rectangle(30))


//Simple Temperature Program which converts degrees to farenheight
// function temperature(){
//     var a =Number(prompt("first temperature reading"));
//     var b =Number(prompt(" second temperature reading"));
//     var c =Number(prompt(" third temperature reading"));
//     var ans=Number(a+b+c);
//     console.log(ans)
//     document.getElementById("box").innerHTML= temperature();
// };

// temperature();

// Just using the for loop

// for (let i=1; i<=10; i++){

//     function oddnumber(){
//         alert("I love you baby Purity I do" +"  "+i) 
//     }

//     oddnumber()
// };



// PLAYING AROUND WITH APIS
// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "c0f0e609bamsh7ed612f8ef33383p1ecf51jsndca02e47da22",
// 		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// DOCUMENT OBJECT MODEL SAMPLE

var h1=document.createElement("h1");
var heading=document.createTextNode("JAVASCRIPT DOCUMENT OBJECT MODEL");
h1.appendChild(heading);
document.getElementById("heading-container").appendChild(h1);

alert("Hello there");
