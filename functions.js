//******************************************SAVING THE VALUE OF A FUNCTION IN A VARIABLE FOR LATER USE******************************************

var multiplication = (m1, m2) => {
  //    let m1,m2;
  //   m1 = prompt("Number_1");
  //   m2 = prompt("Number_2");
  return m1 * m2;
};

var m_ans = multiplication();
console.log(m_ans);

//DEFINATION OF THE GLOBAL VARIABLES
//====================================
var digits, text, sum;

var digits = (ans_1, ans_2, ans_3, g_ans) => {
  // DEFINATION OF THE LOCAL VARIABLES(Declared inside the argument brackets of the function).
  // ==================================
  ans_1 = parseInt(prompt("First No .."));
  ans_2 = parseInt(prompt("Second No.."));
  ans_3 = parseInt(prompt("Third No..."));
  g_ans = ans_1 + ans_2 + ans_3;
  // console.log(ans_1,ans_2,ans_3);
  // The return and console.log statement can not be used at the same time inside a variable.
  return g_ans;
  // console.log(g_ans);
};

var sum = digits();
console.log(sum);
// THis is just another way of calling a function and storing its return value in that container.
// digits=addition();

//IF ELSE STATEMENT.
//=================
if (digits < 100) {
  text = "Your Digit is less than 100";
} else if (digits >= 100 && digit <= 200) {
  text = "Your digit must be between 100 and 200!";
} else {
  text = "Your digit is greater than 200";
}

/*console.log(digits);..(This gives you the whole skeleton of the function but when you assign it to something like a variable
    ama an if statement or another function itakuwa sasa the single return value that you always wanted.) */
console.log(text);

//Take Away From This Exercise.
//=================================
/*
For the function to return a single value your must assign the function to another variable outside the function i.e (Like in the Source code line 9 &30).
Otherwise the function as it is will be returned with all its statements.
Its like the function must be assigned to something inorder for it to give you just the output of the return value like even in the if statement.But when you just console.log the function
it will give you the skeleton of the function...
Also remember to use the return statement.
When you pass the variable names inside the argument brackets of a function,you are declaring them and this is where the need for using the let statement over
var comes in it is the one that has helped me realize this
For now,I will be using var for global scope variables and let for local variables until otherwise directed..And you are hereby directed to be using let anytime
that you are defining a variable because it notifies you whenever you have already defined the variable to avoid changing the value uknowingly.
*/
