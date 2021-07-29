const kenya=[
    {
        Number: 01,
        County:"Mombasa",
        Population:1208333,
        Hospital:"General",
    },
   
    {
        Number: 02,
        County:"Kilfi",
        Population:1453787,
         Hospital:"Referral", 
    },
    {
        Number: 03,
        County:"Meru",
        Population:1545714,
         Hospital:"Teaching",
    },
    {
        Number: 04,
        County:"Kiambu",
        Population:2417735,
         Hospital:"General",
    },
    {
        Number: 05,
        County:"Kakamega",
        Population:1867579,
         Hospital:"Referral",
    },
    
];

const hospitalLevel=[...new Set(kenya.map((unit)=>{
    return unit.Hospital;

}))];

console.log(...hospitalLevel);

const result=document.getElementsByClassName('paragraph')
result.innerHTML=hospitalLevel;


