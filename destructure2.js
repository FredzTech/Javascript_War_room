var profiling={
    names:"Gichia Alfred Githinji",
    age:"18 Years",
    countyOfResidence:"Kiambu County"
}; 

const{ names:SML, countyOfResidence:mCounty}=profiling;
console.log(SML,mCounty);
console.log(SML,mCounty);

// Just messing around with the type of kerea that i found

// console.log(typeof(age));


//DESTRUCTURING ARRAYS

const furniture=['table','television','fridge','dispenser','Microwave'];


const [reading_Item,watching_Item]=furniture;
const [read_Item,watch_Item,...rest]=furniture;
console.log(reading_Item);//or the read Item
console.log(watching_Item);//or the watch Item
console.log(rest);

//As for the arrays destrucuturing them is quite easy as baptising them with new names you just have to write them while destructuring



