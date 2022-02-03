//SAMPLE OF AN ITEMS ARRAY OF ITEMS.
//=====================================

// You are free to play around with this data.

let Items = [
  {
    id: "1",
    title: "queen panel bed",
    price: 10.99,
    quantity: "1",
  },
  {
    id: "2",
    title: "queen panel bed",
    price: 10.99,
    quantity: "1",
  },
  {
    id: "3",
    title: "table",
    price: 10.99,
    quantity: "1",
  },
  {
    id: "4",
    title: "queen panel bed",
    price: 10.99,
    quantity: "1",
  },
  {
    id: "5",
    title: "queen panel bed",
    price: 10.99,
    quantity: "1",
  },
  {
    id: "5",
    title: "queen panel bed",
    price: 10.99,
    quantity: "1",
  },
];
// console.log(Items);

// DESTRUCTURING node Combination.jsmage}=products.fields;

//    return (id,title,price);
//   });

//   console.log(simpProducts);

//FIND METHODS
let id = 5;
let item = () => {
  let em = Items.find((product) => {
    if (product.title === "table") {
      return product.id;
    } else {
      return "error";
    }
  });
  return em;
};

console.log(item());

//  console.log(item);
//  console.log(Items);
