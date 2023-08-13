class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (!this.isEmpty()) {
        return this.items.pop();
      }
      return null;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.items.length - 1];
      }
      return null;
    }
  }
  
  function reverseStack(stack) {
    const auxStack = new Stack();
  
    while (!stack.isEmpty()) {
      auxStack.push(stack.pop());
    }
  
    while (!auxStack.isEmpty()) {
      stack.push(auxStack.pop());
    }
  }
  
  const originalStack = new Stack();
  originalStack.push(1);
  originalStack.push(2);
  originalStack.push(3);
  originalStack.push(4);
  
  console.log('Original Stack:', originalStack.items);
  reverseStack(originalStack);
  console.log('Reversed Stack:', originalStack.items);
  