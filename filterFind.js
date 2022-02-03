const kenya = [
  {
    Number: 01,
    County: "Mombasa",
    Population: 1208333,
  },

  {
    Number: 02,
    County: "Kilfi",
    Population: 1453787,
  },
  {
    Number: 03,
    County: "Meru",
    Population: 1545714,
  },
  {
    Number: 04,
    County: "Kiambu",
    Population: 2417735,
  },
  {
    Number: 05,
    County: "Kakamega",
    Population: 1867579,
  },
];

// console.log(kenya);

const counties = kenya.find((popularity) => {
  if (popularity.Population > 1400000 && popularity.Number <= 05) {
    // return popularity.County;
    // return true;
    var nm;
    nm = popularity.County;
    console.log(nm);
    //This sort of acts as a loop returning the 4 names that meet the above criteria.
  }
});

// console.log(counties);

const county_1 = kenya.filter((cnty) => {
  if (cnty.Number == 1) {
    return cnty.County;
  }
});

//  console.log(county_1);

/*SUMMARY
//========

Filter and Find are almost similar but mostly find returns the first value that fits the command for
 example in the if statement that i have written,
find returns only the first county with a population of greater than 1850000 whereas there are two and these are Kakamega and Kiambu so to avoid this we use the filter method.

// If we return true instead of something else which in this case we are returning a county based on the population factor,it returns those items that meets that condition like it returns the whole array

//If we place them inside another variable it kinda returns the exact data that you are looking for.....

*/
