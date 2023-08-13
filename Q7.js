function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
  }
  
  function prefixToInfix(prefix) {
    const stack = [];
  
    for (let i = prefix.length - 1; i >= 0; i--) {
      const char = prefix[i];
  
      if (isOperator(char)) {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const infixExpression = `(${operand1}${char}${operand2})`;
        stack.push(infixExpression);
      } else {
        stack.push(char);
      }
    }
  
    return stack.pop();
  }
  
  const prefixExpression = '-+2*345';
  const infixExpression = prefixToInfix(prefixExpression);
  console.log('Infix Expression:', infixExpression);
  