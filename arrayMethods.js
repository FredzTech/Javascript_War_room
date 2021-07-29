let sunriseBlocks=["Block-A","Block-B"];
let blockARooms=["Kitchen","Bathroom","Toilet","2-Beds","Shoerack","Closet"];
//ACESSING AN ARRAY USING INDEX POSITION
// console.log(sunriseBlocks[1]);

// console.log(blockARooms[3]);


// LOOPING OVER AN ARRAY
sunriseBlocks.forEach(function(item,index,array){
    console.log(item,index)
});

blockARooms.forEach(function(item,index,array){
    console.log(item,index)
});


//COPY AN ARRAY
let blockBRooms=blockARooms.slice();
console.log(blockBRooms);

//OTHERTRIALS
console.log(blockARooms.length-1);




const distance ="50km";

// console.log(Array.from(distance));

const Rooms = Array.from({ length:120 }); 
 console.log(Rooms);