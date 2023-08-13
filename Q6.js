function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
  }
  
  function postfixToPrefix(postfix) {
    const stack = [];
  
    for (let char of postfix) {
      if (isOperator(char)) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const prefixExpression = char + operand1 + operand2;
        stack.push(prefixExpression);
      } else {
        stack.push(char);
      }
    }
  
    return stack.pop();
  }
  
  const postfixExpression = '23+45*6-';
  const prefixExpression = postfixToPrefix(postfixExpression);
  console.log('Prefix Expression:', prefixExpression);
  