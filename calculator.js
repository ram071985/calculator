// Button location
let screen = document.getElementById("js-screen");
let one = document.getElementById("js-one");
let two = document.getElementById("js-two");
let three = document.getElementById("js-three");
let four = document.getElementById("js-four");
let five = document.getElementById("js-five");
let six = document.getElementById("js-six");
let seven = document.getElementById("js-seven");
let eight = document.getElementById("js-eight");
let nine = document.getElementById("js-nine");
let zero = document.getElementById("js-zero");
let divide = document.getElementById("js-divide");
let multiply = document.getElementById("js-multiply");
let minus = document.getElementById("js-minus");
let plus = document.getElementById("js-plus");
let equal = document.getElementById("js-equals");
let clear = document.getElementById("js-ce");
let decimal = document.getElementById("js-decimal");
let item = document.getElementsByClassName("item");

// let multipleItem = item + plus.textContent + item + plus.textContent;
// multipleItem = true;

let plusEquals = "+";
let minusEquals = "-";
let firstOperand = null;
let secondOperand = null;
let mathOperand = null;
let multipleFunction = null;

 //secondOperand?
  // One Key Functionality
  one.addEventListener("click", function(e) {
    mathOperand = "+" + "+";
    if (screen.textContent === "") {
      let oneNode = document.createTextNode("1");
      screen.appendChild(oneNode);
    } else if (firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0") {
      secondOperand = screen.textContent;
    // } else if ()
    }
  });

// Two Key Functionality
two.addEventListener("click", function(e) {
  if (two.textContent === "2") {
    let twoNode = document.createTextNode("2");
    screen.appendChild(twoNode);
  } else {
    screen.textContent = "";
  }
});

// Three Key Functionality
three.addEventListener("click", function(e) {
  if (three.textContent === "3") {
    let threeNode = document.createTextNode("3");
    screen.appendChild(threeNode);
  } else {
    screen.textContent = "";
  }
});

// Four Key Functionality
four.addEventListener("click", function(e) {
  if (four.textContent === "4") {
    let fourNode = document.createTextNode("4");
    screen.appendChild(fourNode);
  } else {
    screen.textContent = "";
  }
});

// Five Key Functionality
five.addEventListener("click", function(e) {
  if (five.textContent === "5") {
    let fiveNode = document.createTextNode("5");
    screen.appendChild(fiveNode);
  } else {
    screen.textContent = "";
  }
});

// Six Key Functionality
six.addEventListener("click", function(e) {
  if (six.textContent === "6") {
    let sixNode = document.createTextNode("6");
    screen.appendChild(sixNode);
  } else {
    screen.textContent = "";
  }
});

// Seven Key Functionality
seven.addEventListener("click", function(e) {
  if (seven.textContent === "7") {
    let sevenNode = document.createTextNode("7");
    screen.appendChild(sevenNode);
  } else {
    screen.textContent = "";
  }
});

// Eight Key Functionality
eight.addEventListener("click", function(e) {
  if (eight.textContent === "8") {
    let eightNode = document.createTextNode("8");
    screen.appendChild(eightNode);
  } else {
    screen.textContent = "";
  }
});

// Nine Key Functionality
nine.addEventListener("click", function(e) {
  if (nine.textContent === "9") {
    let nineNode = document.createTextNode("9");
    screen.appendChild(nineNode);
  } else {
    screen.textContent = "";
  }
});

// Zero Key Functionality
zero.addEventListener("click", function(e) {
  if (zero.textContent === "0") {
    let zeroNode = document.createTextNode("0");
    screen.appendChild(zeroNode);
  } else {
    screen.textContent = "";
  }
});

// Decimal Key Functionality
decimal.addEventListener("click", function(e) {
  if (decimal.textContent === ".") {
    let zeroNode = document.createTextNode(".");
    screen.appendChild(zeroNode);
  } else {
    screen.textContent = "";
  }
});

minus.addEventListener("click", function(e) {
  mathOperand = "-";
  firstOperand = screen.textContent;
  if ((firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0")) {
    screen.textContent = "";
  }
});

multiply.addEventListener("click", function(e) {
  mathOperand = "*";
  firstOperand = screen.textContent;
  if ((firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0")) {
    screen.textContent = "";
  }
});

divide.addEventListener("click", function(e) {
  mathOperand = "/";
  firstOperand = screen.textContent;
  if ((firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0")) {
    screen.textContent = "";
  }
});

plus.addEventListener("click", function(e) {
  mathOperand = "+";
  firstOperand = screen.textContent;
  if ((firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" + "+")) {
    screen.textContent = "";

  } 



 equal.addEventListener("click", function(e) {
  secondOperand = screen.innerHTML;
  let parseFirstOperand = parseFloat(firstOperand);
  let parseSecondOperand = parseFloat(secondOperand);
  if (mathOperand === "+") {
    screen.textContent = parseFirstOperand + parseSecondOperand;
  } else if (mathOperand === "-") {
    screen.textContent = parseFirstOperand - parseSecondOperand;
  } else if (mathOperand === "*") {
    screen.textContent = parseFirstOperand * parseSecondOperand;
  } else if (mathOperand === "/") {
    screen.textContent = parseFirstOperand / parseSecondOperand;
  }
  });
});
// Clear button Functionality
clear.addEventListener("click", function(e) {
  screen.innerHTML = "";
});

// check out firstOperand and what you can do with it once it is saved in a variable
// find a way to capture firstOperand globally?
// make function for multiple functions?  

