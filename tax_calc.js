const salary=prompt("What is your basic salary")

var tax=()=>{
    if (salary<10000){
        console.log(0.05*salary)
    }else if(salary>10000&&salary<100000){
        console.log(0.08*salary)
    }else {
        console.log(0.085*salary)
    }
    // document.write(salary)
};

tax()

// var p=document.createElement("p");
// p.setAttribute("id","answer");
let text=document.createTextNode(salary);
console.log(text);
var pr=document.getElementsByClassName("answer").appendChild(text);
console.log(pr);
pr.appendChild(text);
console.log(p);