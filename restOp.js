// RECAP ON DESTRUCTURING
let bread={
    brand:"Kingsmill",
    quantity:"400_grams",
    Expiry_Date:"12-01-2021"
};

// let {brand,Expiry_Date,quantity}=bread;

// console.log(brand,quantity,Expiry_Date);
//List of Additional Properties

bread.manufaturer="KingsMillers_LTD."

// console.log(bread);

let {brand,...rest}=bread;

console.log(brand,rest);

// Its important to note that when we use the rest operator the items are put into a container but still remain an object



// USING THE REST OP TO CREATE A VARIABLE FOR THE REST OF THE PROPERTIES 

const Average=(name,...scores)=>{
    const answer=scores.reduce((total,item)=>{
        return total+=item
    },0)/scores.length;
    console.log(answer+name);

};

const cat2 = [90,98,34,78]

Average("Thuita",...cat2);
//ADDING 