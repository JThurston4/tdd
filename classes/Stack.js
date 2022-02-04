// needs 
// -top
// -next
// -dataNode (current) (each an object)
class Stack {
  constructor() {
    this.size = 0;
    this.items = {};
  }



  push(item) {
    this.items = new Node(item, this.items);
    this.size++;
  };

  peek() {
    return this.items.data;
  };

  next() {
    return this.items.next.data;
  };

  pop() {
    this.items = this.items.next;
  }
}

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

module.exports = Stack;
