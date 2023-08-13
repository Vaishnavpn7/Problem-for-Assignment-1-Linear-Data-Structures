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
  
  class MinStack {
    constructor() {
      this.mainStack = new Stack();
      this.minStack = new Stack();
    }
  
    push(item) {
      this.mainStack.push(item);
      if (this.minStack.isEmpty() || item <= this.minStack.peek()) {
        this.minStack.push(item);
      }
    }
  
    pop() {
      if (!this.mainStack.isEmpty()) {
        const poppedItem = this.mainStack.pop();
        if (poppedItem === this.minStack.peek()) {
          this.minStack.pop();
        }
        return poppedItem;
      }
      return null;
    }
  
    getMin() {
      return this.minStack.peek();
    }
  }
  
  const minStack = new MinStack();
  minStack.push(3);
  minStack.push(5);
  minStack.push(2);
  minStack.push(7);
  
  console.log('Smallest number:', minStack.getMin()); // Output: 2
  