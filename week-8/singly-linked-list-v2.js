/**
 * This is a implementation of singely linked list
 */

class ListNode {
  constructor(data, next = null) {
    this.value = data;
    this.next = next;
  }
}

class SingleyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // O(1)
  addNode(data) {
    const newNode = new ListNode(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    this.addToTail(data);

    return;
  }

  // O(1)
  addToHead(data) {
    if (this.head === null) {
      const newNode = new ListNode(data);
      this.head = newNode;
      this.tail = newNode;
      this.size++;

      return;
    }

    const previousList = this.head;
    this.head = new ListNode(data, previousList);

    this.size++;

    return;
  }

  // O(1)
  addToTail(data) {
    const newNode = new ListNode(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    const previousTail = this.tail;

    this.tail = newNode;
    previousTail.next = newNode;

    this.size++;
    return;
  }

  // O(1)
  removeFromHead() {
    if (this.head === null) {
      throw new Error("List is empty");
    }

    let previousList = this.head.next;

    if (previousList !== null) {
      this.head = new ListNode(previousList.value, previousList.next);
    } else {
      this.head = null;
      this.tail = null;
    }

    this.size--;
  }

  // O(n)
  removeFromTail() {
    if (this.head === null) {
      throw new Error("List is empty");
    }

    this.removeAtIndex(this.size - 1);

    return;
  }

  // O(n)
  addAtIndex(data, index) {
    if (index < 0) {
      throw new Error("Can not add this position");
    }

    if (index === 0) {
      this.addToHead(data);
      return;
    }

    if (this.size === index) {
      this.addNode(data);
      return;
    }

    let currentList = this.head;
    let count = 0;

    while (currentList.next) {
      if (count === index - 1) {
        const nodeToBeAdded = new ListNode(data, currentList.next);
        currentList.next = nodeToBeAdded;
        break;
      }

      currentList = currentList.next;
      count++;
    }

    this.size++;
  }

  // O(n)
  removeAtIndex(index) {
    if (index < 0) {
      throw new Error("Can not remove from this position");
    }

    if (index > this.size) {
      throw new Error("Can not remove from this position");
    }

    if (index === 0) {
      // remove from head
      this.removeFromHead();
      return;
    }

    let currentList = this.head;
    let count = 0;

    while (currentList.next) {
      if (count === index - 1) {
        const temp = currentList.next;

        delete currentList.next;

        currentList.next = temp.next;
      } else {
        currentList = currentList.next;
      }
      count++;
    }

    this.tail = new ListNode(currentList.value);

    this.size--;

    return;
  }

  // O(n)
  removeWithValue(valueToMatch) {
    let currentList = this.head;
    let temp = null;
    let count = 0;

    while (currentList.next) {
      if (currentList.value === valueToMatch) {
        temp = currentList.next;
        currentList.next = temp.next;
        currentList.value = temp.value;

        break;
      } else {
        count++;

        // this condition will only be true if the value to be deleted
        // is last item
        if (
          count === this.size - 1 &&
          currentList.next.value === valueToMatch
        ) {
          this.removeAtIndex(this.size - 1);
          return;
        }

        currentList = currentList.next;
      }
    }

    this.size--;

    return;
  }

  getListSize() {
    return this.size;
  }

  printList() {
    let currentList = this.head;

    while (currentList.next !== null) {
      console.log(currentList.value);
      console.log("-------------------");
      currentList = currentList.next;
    }

    return;
  }
}

const linkedList = new SingleyLinkedList();

// linkedList.addToTail(15);
// linkedList.addToTail(11);
// linkedList.addToTail(24);
linkedList.addNode(15);
linkedList.addNode(11);
linkedList.addNode(24);
linkedList.addToHead(-5);
linkedList.addToHead(7);
// linkedList.removeFromHead();
// linkedList.removeFromHead();
// linkedList.removeFromHead();
// linkedList.removeFromHead();
// linkedList.removeFromHead();
// linkedList.removeFromHead();
linkedList.addAtIndex(46, 2);
// linkedList.removeAtIndex(3);
// linkedList.removeFromTail();
linkedList.removeWithValue(24);

// linkedList.printList();

// linkedList.removeAtIndex(0);
// linkedList.removeAtIndex(0);
// linkedList.removeWithValue(11);
// linkedList.removeWithValue(24);
// linkedList.removeWithValue(7);

// linkedList.addAtIndex(46, 2);
// linkedList.addAtIndex(64, 6);

console.log(JSON.stringify(linkedList, null, 2));

// linkedList.printList();
