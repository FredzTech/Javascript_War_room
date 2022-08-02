let operation = "division";

let first = 1;
let second = 1;
let third = 1;

const inputs = (first, second, third) => {
  if (operation == "addition") {
    return sum(first, second, third);
  } else if (operation == "multiplication") {
    return multiplication(first, second, third);
  } else if (operation == "division") {
    return division(first, second);
  } else {
    return "This is an uknown operation";
  }
};

const sum = (first, second, third) => {
  return first + second + third;
};

const division = (first, second) => {
  return first / second;
};

const multiplication = (first, second, third) => {
  return first * second * third;
};

console.log(inputs(32000, 625));
