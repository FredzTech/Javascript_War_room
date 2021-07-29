const kenya=[
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


const grossPopulation=kenya.reduce((gross,census)=>{
    // console.log(census)  ==>Just a confirmatory that my new array here has access to all objects in the previous variable which contains an array that contains objects; 
    //  console.log(census.Population) ==>Returns all the salaries that it has found when going through the array
    console.log(census.Population);
    gross+=census.Population;
    return gross;
},0000);

console.log(grossPopulation);


// const leadingCounty=kenya.reduce((infections,overall)=>{
//     console.log(overall);
// if(overall.population>1850000){
// console.log(overall.County)
// }
// return infections});
// //     return infections;
// // });
