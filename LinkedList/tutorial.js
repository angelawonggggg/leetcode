class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    this.length++;
    let newNode = new Node(value);

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
  }

  remove() {
    if (this.tail) {
      this.length--;
      const tailNode = this.tail;

      let currentNode = this.head;

      while (currentNode != tailNode) {
        currentNode = currentNode.next;
      }

      const beforeTail = currentNode;
      this.tail = beforeTail;
      this.tail.next = null;

      return tailNode;
    }

    return undefined;
  }

  insertHead(value) {
    this.length++;
    let newNode = new Node(value);

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  removeHead() {
    if (this.head) {
      this.length--;
      const removedNode = this.head;
      this.head = this.head.next;
    }
    return undefined;
  }

  insertIndex(value, index) {
    if (index >= this.length) {
      throw new Error("Insert index out of bounds");
    }

    if (index === 0) {
      return this.insertHead(value);
    }

    let previousNode = null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    const newNode = new Node(value);
    this.length++;

    return newNode;
  }

  print() {
    let current = this.head; // start from head
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const linkedList1 = new LinkedList();

linkedList1.insert("Angela");
linkedList1.insert("Wong");
linkedList1.print();
linkedList1.remove("Wong");
linkedList1.print();
