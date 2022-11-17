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
    this.list = null;
    this.tail = null;
    this.size = 0;
  }

  // recurrsivelyAddNodeToLast(_list, listNodeToAdd) {
  //   if (_list.next === null) {
  //     _list.next = listNodeToAdd;
  //     return _list;
  //   }

  //   return this.recurrsivelyAddNodeToLast(_list.next, listNodeToAdd);
  // }

  // O(n)
  addNode(data) {
    if (this.list === null) {
      this.list = new ListNode(data);
      this.head = new ListNode(data);
      this.size++;
      return;
    }

    let currentList = this.list; // copying list previous reference pointer

    while (currentList.next) {
      // looping through to end of the list; O(n)
      currentList = currentList.next;
    }

    currentList.next = new ListNode(data);
    this.tail = new ListNode(data);
    this.size++;
    // console.log("currentList", currentList);
    // console.log("this.list", this.list);

    // this.recurrsivelyAddNodeToLast(this.list, listNodeToAdd);
    return;
  }

  // O(1)
  addToHead(data) {
    if (this.list === null) {
      this.list = new ListNode(data);
      this.head = new ListNode(data);
      this.size++;

      return;
    }

    const previousList = this.list; // copying list previous reference pointer

    this.list = new ListNode(data); // assinging new refernce

    this.list.next = previousList; // assigning previous list reference to list.next

    this.head = new ListNode(data); // assigning new head object
    this.size++;

    return;
  }

  addToTail(data) {
    if (this.list === null) {
      const node = new ListNode(data); // object reference 1000
      // this.list = new ListNode(data);
      // this.head = new ListNode(data);

      this.list = node; // copying only the object reference 1000
      this.head = node; // copying only the object reference 1000

      /**
       * when i will add to list again,
       * head variable list will grow
       * because they share the same object reference
       */

      this.size++;
      return;
    }

    if (this.tail === null) {
      this.tail = new ListNode(data);
      this.list.next = new ListNode(data);
      this.tail.previous = this.list.next;

      this.size++;
      return;
    }

    const previousTail = this.tail; // copying previous tail
    previousTail.next = new ListNode(data); // adding new node to tails previous reference of list
    this.list.next = previousTail.previous;

    this.tail = new ListNode(data); // new tail
    this.tail.previous = this.list.next; //
    this.size++;
    return;
  }

  // O(1)
  removeFromHead() {
    if (this.list === null) {
      throw new Error("List is empty");
    }

    let previousList = this.list;
    previousList = previousList.next;

    if (previousList !== null) {
      this.head = new ListNode(previousList.value);
      this.list = new ListNode(previousList.value, previousList.next);
    } else {
      this.head = null;
      this.list = null;
    }

    this.size--;
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

    let currentList = this.list;
    let count = 0;

    while (currentList.next) {
      if (count === index - 1) {
        const nodeToBeAdded = new ListNode(data, currentList.next);
        currentList.next = nodeToBeAdded;
        console.log("currentList", JSON.stringify(currentList, null, 2));
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

    let currentList = this.list;
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

    this.size--;

    return;
  }

  // O(n)
  removeWithValue(valueToMatch) {
    let currentList = this.list;
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

        if (
          count === this.size - 1 &&
          currentList.next.value === valueToMatch
        ) {
          delete currentList.next;
          currentList.next = null;
          break;
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
    let currentList = this.list;

    while (currentList.next !== null) {
      console.log(currentList.value);
      console.log("-------------------");
      currentList = currentList.next;
    }

    return;
  }
}

const linkedList = new SingleyLinkedList();

linkedList.addToHead(7);
linkedList.addToTail(15);
linkedList.addToTail(11);
// linkedList.addToTail(24);
// linkedList.addNode(15);
// linkedList.addNode(11);
// linkedList.addNode(24);
// linkedList.addToHead(-5);

// linkedList.printList();

// linkedList.removeAtIndex(0);
// linkedList.removeAtIndex(0);
// linkedList.removeWithValue(11);
// linkedList.removeWithValue(24);
// linkedList.removeWithValue(7);
// linkedList.removeFromHead();

// linkedList.addAtIndex(46, 2);
// linkedList.addAtIndex(64, 6);

console.log(JSON.stringify(linkedList, null, 2));

// linkedList.printList();
