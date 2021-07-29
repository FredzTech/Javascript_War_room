/* This function generally converts temperature in degrees to FarenHeight by taking an input via a prompt message and displays the answer in the DOM
where one can just delete and repeat again if need be*/

function Conv(){
   var initTempt=prompt("What is the temperature reading?")
   var answer=initTempt*5/7;
   var ansBox=document.getElementById("answerBox");
   var h3=document.createElement("h3");
   var TextAnswer=document.createTextNode("Your answer is"+" "+answer+" "+"farenheit");
   console.log(TextAnswer);
   h3.setAttribute("class","success")
   h3.appendChild(TextAnswer);
   ansBox.appendChild(h3);
   console.log(ansBox);
};


function del(){
   $(".success").remove();
};

/*This function has been generally a sucess where i have been able to manipulate the DOM using some DOM methods and for the remove i have been able to manipulate it using
jQuery which is a very significant step towards coding which I am proud of... */


//TESTING A FUNCTION INSIDE ANOTHER FUNCTION  
// function InitialAge(){
//    const age =prompt("What is your age?");
// };

// InitialAge()

//  function results(age)
//  {
//     var newAge = age*3;
//     console.log(newAge);

   
//    };

// results();

