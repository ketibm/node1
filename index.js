console.log("Keti");
//HINT -> operation e string koj sodrzi +, -, /, *
// function calculate(operation, a, b) {
//switch
//if
// }

// calculate("+", 4, 5);

function calculate(operation, a, b) {
  if (operation == "+") {
    return a + b;
  } else if (operation == "-") {
    return a - b;
  } else if (operation == "*") {
    return a * b;
  } else if (operation == "/") {
    return a / b;
  } else {
    return "invalid input";
  }
  //   else if (operation == "-") return a - b;
}
console.log(calculate("/", 4, 5));

function calculation(operation, a, b) {
  switch (operation) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
    default:
      return "Invalid input";
  }
}
console.log(calculation("-", 4, 5));
