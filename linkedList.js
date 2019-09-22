class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index == 0) {
      return this.prepend(value);
    } else {
      const newNode = new Node(value);
      const leader = this.traversToIndex(index - 1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this;
    }
  }

  traversToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index == 0) {
      this.head = this.head.next;
    } else if (index == this.length) {
      const leader = this.traversToIndex(this.length - 1);
      leader.next = null;
      this.tail = leader;
    } else {
      const leader = this.traversToIndex(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
    }
    this.length--;

    return this;
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const mylist = new LinkedList(10);
mylist.append(12);
mylist.prepend(44);
mylist.prepend(22);
mylist.prepend(23);
mylist.prepend(24);
mylist.prepend(25);
mylist.prepend(26);
mylist.prepend(67);
mylist.insert(4, 24);
mylist.remove(0);
mylist.reverse();
console.log(mylist.printList());
