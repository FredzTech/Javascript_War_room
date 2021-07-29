// USING THE SPREAD OPERATOR IN STRINGS-Causes conversion of letters to Individual Items.

const names="Alfred";

const individ_letters=[...names];

console.log(individ_letters); 

// USING IT IN AN ARRAY

const furniture=['table','television','fridge','dispenser','Microwave'];

const newFurniture=[...furniture];
console.log(newFurniture);

newFurniture[0]="extension"; //=>When you try to change anything it affects both of the objects.
console.log(newFurniture);
console.log(furniture);//The furniture remains unchanged when the spread operator is used


// MANIPULATING OBJECTS

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

const newKenya={...Kenya,County:"Laikipia",Number:"4"};

console.log(newKenya);

//ADDING AND EDITING PROPERTIES AFTER THE SPREAD OPERATOR AFTER A COMMA IS A LIE