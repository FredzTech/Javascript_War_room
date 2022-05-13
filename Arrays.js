let utensils = ["spoons", "servingSpoons", "cups", "glasses", "sufurias"];

console.log(utensils);
console.log(utensils.length);
for (var t = 0; t <= 4; t++) {
  console.log(utensils[t], t);
}
console.log(utensils);

let verification = utensils.includes("spoons");
console.log("Hello from verification status turned" + " : " + verification);
let rentalRooms = [
  {
    name: "d6",
    occupant: "Esther Wairimu",
    rooms: ["kitchen", "sitting", "Bathroom", "Bedroom"],
    type: "self-contained",
  },
  {
    name: "d6",
    occupant: "Esther Wairimu",
    rooms: ["kitchen", "sitting", "Bathroom", "Bedroom"],
    type: "self-contained",
  },
  {
    name: "d7",
    occupant: "Stephen Maina",
    rooms: ["kitchen", "sitting", "Bathroom", "Bedroom"],
    type: "singleRoom",
  },
  {
    name: "d8",
    occupant: "Alfred Githinji",
    rooms: ["kitchen", "sitting", "Bathroom", "Bedroom"],
    type: "double room",
  },
];

rentalRooms.map((room) => {
  console.log(
    room.name + "=>" + room.occupant + ":" + room.type + ":" + room.rooms.length
  );
});

["UI/UX", "Web App", "Mobile App", "React JS", "All"].map((item, index) => {
  console.log(item + " " + index);
});

let filteredData = rentalRooms.find((room) => {
  return room.occupant === "Esther Wairimu";
});

console.log(filteredData);
