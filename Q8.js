function areBracketsClosed(code) {
    const stack = [];
    const openingBrackets = '({[';
    const closingBrackets = ')}]';
  
    for (let char of code) {
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        const lastOpeningBracket = stack.pop();
        if (!lastOpeningBracket || openingBrackets.indexOf(lastOpeningBracket) !== closingBrackets.indexOf(char)) {
          return false;
        }
      }
    }
  
    return stack.length === 0; // If stack is empty, all brackets are closed
  }
  
  const codeSnippet = 'function helloWorld() { return "Hello, World!"; }';
  if (areBracketsClosed(codeSnippet)) {
    console.log('All brackets are properly closed.');
  } else {
    console.log('Some brackets are not properly closed.');
  }
  