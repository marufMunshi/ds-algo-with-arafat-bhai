/**
 * This is a implementation of doubly linked list
 */

class ListNode {
  constructor(data, next = null, previous = null) {
    this.value = data;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor(data) {
    if (!data) {
      throw new Error("Pass a value to create head node");
    }

    const newNode = new ListNode(data);
    this.head = newNode;
    this.tail = newNode;
    this.size = 1;
  }

  // O(n)
  printList(action, meta = "") {
    let array = [];
    let currentList = this.head;

    while (currentList !== null) {
      array.push(currentList.value);
      currentList = currentList.next;
    }
    console.log(`----- ${action} ${meta} -----`);
    console.log(array.join(" <--> "));
    return;
  }

  // O(1)
  // add node to head
  prepend(data) {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;

    this.size++;

    this.printList("prepend");

    return;
  }

  // O(1)
  // add node to tail
  append(data) {
    const newNode = new ListNode(data);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.size++;

    this.printList("append");

    return;
  }

  // O(n)
  // insert node at index
  insert(index, data) {
    if (index < 0) {
      throw new Error("Can not add this position");
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    if (index >= this.size) {
      this.append(data);
      return;
    }

    let previousNode = this.head;

    // traverse upto 1 index before the target index
    for (let k = 0; k < index - 1; k++) {
      previousNode = previousNode.next;
    }

    let newNode = new ListNode(data);

    let previousNextNode = previousNode.next;
    // copying previous next node

    newNode.next = previousNextNode;
    // adding previous next node to next property of the newly created node

    previousNextNode.previous = newNode;
    // adding new refernce to previousNextNode previous

    previousNode.next = newNode;
    // adding new node reference to  previousNode.next

    this.size++;
    this.printList("insert", `added at index ${index}`);

    return;
  }

  // remove last element from list
  // O(1)
  pop() {
    if (this.head === null) {
      throw new Error("List is empty!");
    }

    const newTail = this.tail.previous;
    // this would be the new tail

    newTail.next = null;
    // removing next item
    // that was the previous tail

    this.tail = newTail;

    this.size--;

    this.printList("pop");

    return;
  }

  // remove first element from list
  // O(1)
  shift() {
    if (this.head === null) {
      throw new Error("List is empty!");
    }

    const newHead = this.head.next;
    // this would be new head

    newHead.previous = null;
    // removing previous item
    // this was previous head

    this.head = newHead;

    this.size--;

    this.printList("shift");

    return;
  }

  // remove at index
  // O(n)
  removeAt(index) {
    if (index < 0) {
      throw new Error("Can not remove from this position");
    }

    if (index === 0) {
      this.shift();
      return;
    }

    if (index >= this.size) {
      this.pop();
      return;
    }

    let previousNode = this.head;

    // traverse upto 1 index before the target index
    for (let k = 0; k < index - 1; k++) {
      previousNode = previousNode.next;
    }

    const itemToDelet = previousNode.next;

    let newNextNode = itemToDelet.next;
    newNextNode.previous = itemToDelet.previous;

    previousNode.next = newNextNode;

    this.size--;
    this.printList("removeAt", `removed from index ${index}`);

    return;
  }

  // remove with value
  // O(n)
  removeWithValue(value) {
    if (!value) {
      throw new Error("No value to match");
    }

    let previousNode = this.head;
    let count = 1;

    while (previousNode.next !== null) {
      if (previousNode.value === value && count === 1) {
        this.shift();

        return;
      }

      count++;

      const tempNodeToCheck = previousNode.next;

      if (tempNodeToCheck && tempNodeToCheck.value === value) {
        if (count === this.size) {
          this.pop();
          return;
        } else {
          break;
        }
      }

      previousNode = previousNode.next;
    }

    const itemToDelet = previousNode.next;

    let newNextNode = itemToDelet.next;
    newNextNode.previous = itemToDelet.previous;

    previousNode.next = newNextNode;

    this.size--;
    this.printList("removeWithValue", `removed item with ${value}`);

    return;
  }
}

// const doublyLinkedList = new DoublyLinkedList("Samurai Jack the first");

// doublyLinkedList.prepend("Samurai Champloo");
// doublyLinkedList.prepend("Yoriichi Tsugikuni the first sun breather");
// doublyLinkedList.insert(1, "Tanjiro Kamado last sun breather");
// doublyLinkedList.append("Giyu Tomioka");
// doublyLinkedList.append("last samurai");
// doublyLinkedList.insert(6, "Ronin");
// doublyLinkedList.pop();
// doublyLinkedList.shift();
// doublyLinkedList.removeAt(2);
// doublyLinkedList.removeWithValue("Giyu Tomioka");
// doublyLinkedList.removeWithValue("last samurai");
// doublyLinkedList.removeWithValue("Tanjiro Kamado last sun breather");

module.exports = DoublyLinkedList;
