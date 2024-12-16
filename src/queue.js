const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = {
      value: value,
      next: null
    }

    this.length += 1;

    if(this.length === 1){
      this.head = this.tail = node;
      return;
    }

    // {1, 2}

    this.tail.next = node;

    this.tail = node;


  }

  dequeue() {
    if(this.length === 0){
      return null;
    }

    this.length -= 1;

    if(this.length === 0){
      this.head = this.tail = null;
      return;
    }

    const head = this.head;

    this.head = this.head.next;

    return head.value;
  }
}

// 1, 2, 3, 4, 5

module.exports = {
  Queue
};
