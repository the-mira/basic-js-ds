const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(){
    this.length = null;
    this.tail = null;
  }

  push(element) {
    const node = {
      value: element,
      prev: null
    }

    this.length += 1;

    node.prev = this.tail;
    this.tail = node;
  }

  pop() {
    if(this.length === 0){
      return null;
    }

    this.length -= 1;

    const node = this.tail;
    this.tail = this.tail.prev;
    return node.value;
  }

  peek() {
    return this.tail.value;
  }
}

module.exports = {
  Stack
};
