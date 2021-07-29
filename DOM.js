// THIS IS JUST PROJECT-1 THAT JUST TESTS ON THE SALARY OF DIFFERENT GROUPS OF PEOPLE AND OUTPUT WHAT THEY SHOULD DO OR CONTINUE DOING BANA WITH 
//  THEIR TIME AND MONEY MAZE
let defaultSal,res,mySal,head;
function knowing(){
    defaultSal = 100;
    mySal =prompt(" What is your salary?");

    if( mySal<defaultSal)
    {
        head="SAALAM-ALEIKUM"
         res=' My friend chapa boss yako';
    }
    else if(mySal <=500)
    {
        head="ALEIKUM ASAALAM";
        res='Wewe tumia mdomo yako fity';
    }
    else
    {
         head="AVERAGE"
         res='Wewe ata unaweza wacha kazi';
    };

    console.log(head);

    let title=document.getElementById("heading-1b");
    let wrd=document.createTextNode(head);
    console.log(title);
    console.log(wrd);
    title.appendChild(wrd);
    console.log(title);

    let par=document.getElementById('output-1a');
    let txt=document.createTextNode(res);
    par.appendChild(txt);
   
};

// MANIPULATIONG THE DOM 
//You can manipulate as many elements as you wish as i have done here maze.Manipulating the heading and also the body......
 


// var age = prompt("How old are you?")
// if( age > 18 ){
// document.write("<b>Qualifies for driving</b>");
// }else{
// document.write("<b>Does not qualify for driving</b>");
// };

// An interesting DOM method that writes on the screen directly