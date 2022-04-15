let perror = document.querySelector(".error");
let input = document.querySelector("#fname");
let nameBox = document.querySelector(".nameBox");
let trackerParagraph = document.querySelector(".trackerParagraph");
var tracker = false;

let dissapear = () => {
  setTimeout(() => {
    console.log(tracker);
    tracker = !tracker;
  }, 3000);
};

tracker ? (trackerParagraph.innerHTML = "true") : "";

let test = () => {
  let text = input.value;
  console.log(nameBox);
  nameBox.innerHTML = text;
};
try {
  let number = 9;
  console.log("Everything is fine hence no error");

  console.log(number);
} catch (error) {
  //THE CATCH STATEMENT IS MORE OF A FOLLOW UP ON THE CODE IN TEST.
  console.log(perror);
  perror.innerHTML = error;
} finally {
  console.log(
    "Hii ni ile code ambayo haitambui.Error or not it will still run"
  );
}

let cutfunction = () => {
  setTimeout(() => {
    alert("Some info is currently being cut.");
  }, 3000);
};
