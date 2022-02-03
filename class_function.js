/*  THis is an example of a class function that creates a car object using the constructor method which has the same syntax as the function syntax but now here the parameters become the properties
separated by commas and the meat of the function inside the curly braces becomes the referenced predefined properties in the brackets.It is important to note that when you create a new instance of the 
object,the properties are assigned inside strings*/

class car {
  constructor(name, state) {
    this.brand = name;
    this.state = state;
  }
  present() {
    return "I have a " + this.brand;
  }
}

myCar = new car("Nissan", "New");
console.log(myCar.state);

dadsCar = new car("Toyota_Corolla", "Brand_New");
console.log(dadsCar);
console.log(dadsCar.state);

momsCar = new car("Advan", "SecondHand");

console.log(momsCar.present());

//METHODS IN CLASSES

// The method is added as show below like after the constructor.
//In this case we will add a method called present that outputs the name of the gift and its type  in a sentence that makes total sense.

class gift {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }

  present() {
    return (
      "I have a" +
      "  " +
      this.name +
      "  " +
      "gift for easter which is a " +
      this.brand
    );
  }
}

personalCar = new gift("Nissan Audi", "Refurbished_Car");

console.log(personalCar); //The constructor method for defining object properties is automatically called.

// Other functions in a class must be called manually

console.log(personalCar.present());

// CLASS INHERITANCE

/* This is simply inheriting properties and methods from another class where the "extends" keyword is used*/

//We are goin to create a new class called Model which will inherit the properties and methods of the car class defined earlier.

class Model extends car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + ",it is of the model " + this.model;
  }
}

momsCar = new Model("Nissan", "Fles");
console.log(momsCar.show());

/* The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

*/
