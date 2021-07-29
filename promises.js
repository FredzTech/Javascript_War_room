let mult;
mult=25*4;
var newAns;
newAns=mult*4;

var number=new Promise((resolve,reject)=>{
    if(mult==100){
        resolve("The operation is correct");
    }else{
        reject("Kuuma nje nayo.....");
    }
});

number.then((answer)=>{
    console.log(answer);
}).then((newAns)=>{
    console.log("The method is correct and when the answer is multiplied by 4 it becomes..."+" "+newAns);
}).then((anotherAns)=>{
  anotherAns=newAns*5;
  console.log("Your other answer is "+" "+anotherAns);
    
}).catch((answer)=>{
    var newAns;
    newAns=mult*5;
    console.log(answer);
    console.log("Your method is wrong but when the correct answer,"+mult+" "+" is multiplied by 5 it becomes..."+" "+newAns);
    
});