class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
      const follower = leader.next;
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.prev = leader;
      newNode.next = follower;
      follower.prev = newNode;
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
      this.head.prev = null;
    } else if (index == this.length - 1) {
      const leader = this.traversToIndex(this.length - 2);
      leader.next = null;
      this.tail = leader;
    } else {
      const leader = this.traversToIndex(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      unwantedNode.next.prev = leader;
    }
    this.length--;
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

const mylist = new DoublyLinkedList(10);
mylist.append(12);
mylist.prepend(44);
mylist.prepend(22);
mylist.prepend(67);
mylist.insert(4, 24);
mylist.remove(5);
console.log(mylist.printList());
