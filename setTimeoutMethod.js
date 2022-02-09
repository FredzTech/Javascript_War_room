//USED TO CAUSE A SHORT MEANINGFUL DELAY INTERMS OF RESPONSE
//============================================================
let output2 = () => {
  let name = prompt("What is your first name");
  setTimeout(() => {
    alert("Your first name is" + " " + name);
  }, 2000);
};

output2();
