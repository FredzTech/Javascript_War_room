// TEMPLATE LITERALS/TEMPLATE STRINGS.
//====================================
/* Mainly used for:-
    Creating multi line sentences.
    Embedding a Javascript expression in a sentence (String interpolation.)

We create a totally different concept called the template literals which mimick the strings but are not strings.
They are the ones that are enclosed with the two backticks.

A template literal can be described or referred to as a dynamic string.
 */

// USE 1 : CREATION OF MULTI LINE SENTENCES.
var str1 = "Hello there.I went to the zoo.";
var str2 = `Hello there.
I went to the zoo.`;
// USE 2 : STRING INTERPOLATION/ EMBEDDING JS EXPRESSIONS
var place = "zoo";
var str3 = "Hello there.I went to the" + " " + place;

var str4 = `Hello there.I went to the ${place}`;

var br = "============================================";

console.log(str1);
console.log(br);
console.log(str2);
console.log(br);
console.log(str3);
console.log(br);
console.log(str4);
console.log(br);
