// Function to calculate the expression
function calculateExpression(expression) {
  const tokens = expression.split(' ');
  let currentOperator = null;
  let currentOperand = null;
  let result = null;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (isNumber(token)) {
      const number = parseFloat(token);

      if (currentOperand === null) {
        currentOperand = number;
      } else {
        currentOperand = operate(currentOperator, currentOperand, number);
      }
    } else if (isOperator(token)) {
      currentOperator = token;
    } else {
      throw new Error('Invalid token: ' + token);
    }
  }

  if (currentOperand !== null) {
    result = currentOperand;
  }

  return result;
}

// Function to check if a token is a number
function isNumber(token) {
  return /^\d+(\.\d+)?$/.test(token);
}

// Function to check if a token is an operator
function isOperator(token) {
  return ['+', '-', '*', '/', '%'].includes(token);
}

// Function to perform arithmetic operations
function operate(operator, operand1, operand2) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
    case '%':
      return operand1 % operand2;
    default:
      throw new Error('Invalid operator: ' + operator);
  }
}
