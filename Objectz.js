const items = [
    {name: 'Mountain bike', price :10000},
    {name: 'Sugar Dish', price :150},
    {name: 'Drinking Chocholate', price :50},
    {name: 'Arimis', price :30},
    {name: 'Mouse', price :1000},
    {name: 'Bread', price :75},
    {name: 'Spoon', price :25}
]

let item;
let budget = items.map((itemz)=>{
 if (itemz.price < 10000){
      return itemz;
 }
});

console.log(budget);