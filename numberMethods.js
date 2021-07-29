let int =123;
let int_2=12;
let int_3=13;
let sum=(int+int_2+int_3);
console.log(sum.toString());//It really isnt very useful...


let int_4 =123.123454444444;
let int_5=12.12345;
let int_6=13.12345;
let sum=(int_4+int_5+int_6);
console.log(sum.toFixed(4));//Cuts on the number of decimals and rounds off kama kawaida.........

//TAKE AWAY
//=============
/**NUMBER is generally an object with its own methods and properties.(What gives the object life.)
 * Some of the most useful methods that i have seen are:-
 * .toFixed()-Rounds off to the desired number of decimal places...
 * .toString()-Convers a number to an object literal whatever that means.....
 * .toExponential()-Returns a string, with a number rounded and written using exponential notation.
    A parameter defines the number of characters behind the decimal point.
 * CONVERTING VARIABLES TO NUMBERS.
   ================================
    THere are three methods that can be used to convert variables to numbers so that you can carry out the different
    mathematical expressions that you could wish to do with them.These are:-
        1.Number() method -Parses a variable and returns a number.
        2.parseInt() method -Parses a string and returns a whole numbernumber
        3.parseFloat() method -Parses a string and returns a number.
    NB:THESE METHODS ARE NOT NUMBER METHODS,But GLOBAL JAVASCRIPT methods.
      a)These values are parsed inside the brackets as its arguments.
      b)You can pass different sets of numbers separated by spaces but only the first set is returned.
      c)If the numbers cannot be converted ,It returns NaN..(Not a Number).
    NUMBER PROPERTIES
    ==================
    MAX_VALUE -Returns the largest number possible in Javascript
    MIN_VALUE -Returns the smallest number possible in Javascript.
    POSITIVE_INFINITY -Represents infinity
    NEGATIVE_INFINITY -Represents negative infinity
    NB: These only apply to the number object...For example  var x = Number.MAX_VALUE;
        Number properties belongs to the JavaScript's number object wrapper called Number.
 */
