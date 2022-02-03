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
/* Inasaidia sana kwanza kwa methods.
 * You refer to them without the parenthesis maze.
 * It makes you code simpler,cleaner and much easier to write.
 * FOR  EXAMPLE.
 * ============
  class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {

  }

}
 console.log()

*/

class Books {
  constructor(subject, author, pages, price) {
    this.subjectName = subject;
    this.bookAuthor = author;
    this.totalPages = pages;
    this.bookPrice = price;
  }

  get sName() {
    return this.subjectName;
  }
}

let Book_1 = new Books("English", "J.M", 165, 750);

let Book_2 = new Books("Kiswahili", "James Kibiru", "165", "Ksh.750");
//WITH GET AND SET
console.log(Book_1.sName);
console.log(Book_2.sName);

//  WITHOUT GET AND SET

console.log(Book_1.sName());
console.log(Book_2.sName());
