const result = document.querySelector(".result_display");

function getValue(value) {
  let operator;
  if (isNaN(value)) {
    if(result.value.length >= 3) {
        operate()
    }
    if (isNaN(result.value[result.value.length - 1])) {
      operator = handleOperatorPrecedence(
        result.value[result.value.length - 1],
        value
      );
      const resultArray = result.value.split("");
      resultArray.splice(resultArray.length - 1, 1);
      resultArray.push(operator);
      result.value = resultArray.join("");
    } else {
      result.value += value;
    }
  } else {
    result.value += value;
  }
}
function clearDisplay() {
  result.value = "";
}
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return Math.round(num1 * num2 * 100) / 100;
}

function divide(num1, num2) {
  return Math.round((num1 / num2) * 100) / 100;
}

function handleOperatorPrecedence(oldOperator, newOperator) {
  switch (oldOperator) {
    case "+":
    case "-":
      return newOperator;
    case "*":
    case "/":
      if (newOperator === "-") {
        return oldOperator + newOperator;
      } else {
        return newOperator;
      }
  }
}
function handleOperate(result) {
  const match = result.match(/(-?\d+(\.\d+)?)\s*([+\-*/])\s*(-?\d+(\.\d+)?)/);

  if (!match) {
    return result;
  }

  const [__, firstNumber, _, operator, secondNumber] = match;

  return getoperation(
    parseFloat(firstNumber),
    operator,
    parseFloat(secondNumber)
  );
}

function getoperation(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "/":
      return divide(num1, num2);
    case "*":
      return multiply(num1, num2);
  }
}

function handleDelete() {
  const resultArray = result.value.split("");
  resultArray.splice(resultArray.length - 1, 1);
  result.value = resultArray.join("");
}

function operate() {
  if (result.value.length >= 3) {
    result.value = handleOperate(result.value);
  }
}
