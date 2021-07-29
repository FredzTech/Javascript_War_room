/**Classes are like a general declaration for functions
 * It is like a blue print for creating many objects of the same type....
 * It must always have the constructor method which is like a store for the objects properties and methods.For e.g
 * class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
* Objects of the same type are created by calling the constructor function with the new keyword:
* When you now want to create a new object.....Just use the syntax:
let myCar1 = new Car("Ford", 2014);
* The constructor method is called automatically upon initialization of a new object
* You can also add any number of methods after the constructor method.
 */


// GETTERS AND SETTERS
//======================
/**Inasaidia sana kwanza kwa methods ..When you want to refer to them You refer to them without using the parenthesis maze
 * It makes you code simpler,cleaner and much easier to write
 * FOR EXAMPLE.
 * ============
  class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

let myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.cnam;


 * 
 */