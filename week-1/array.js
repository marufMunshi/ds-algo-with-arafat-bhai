class CustomArray {
  constructor(_array) {
    this.ARRAY_SIZE = 10;
    const array = new Array(this.ARRAY_SIZE);
    this.array = array;

    for (let i = 0; i < _array.length; i++) {
      this.array[i] = _array[i];
    }
  }

  log() {
    this.array.map((i) => console.log(i));
  }

  getSize() {
    // variable
    let length = 0;
    for (let element of this.array) {
      length++;
    }

    return length;
  }

  getOnlyValueInititedSize() {
    let length = 0;
    for (let element of this.array) {
      if (element !== undefined) {
        length++;
      }
    }
    return length;
  }

  declareNewArray() {
    if (this.ARRAY_SIZE - this.getOnlyValueInititedSize() === 1) {
      this.ARRAY_SIZE = this.ARRAY_SIZE * 2;
    }

    return new Array(this.ARRAY_SIZE);
  }

  findElement(value) {
    for (let i = 0; i < this.getSize(); i++) {
      if (this.array[i] === value) {
        return i;
      }
    }

    return -1;
  }

  insertAtRandom(value, position) {
    // FIXEME: don't declare new array
    if (position < 0) {
      position = 0;
    }

    let newArray = this.declareNewArray();
    let i;

    // copying elements till the new position
    for (i = 0; i < position; i++) {
      newArray[i] = this.array[i];
    }

    // adding new value at the position
    newArray[i] = value;

    for (i = position; i < this.getSize(); i++) {
      newArray[i + 1] = this.array[i];
    }

    this.array = [...newArray];

    return this.array;
  }

  insertAtLast(value) {
    // FIXEME: make O(n)
    let newArray = this.declareNewArray();
    let i;

    for (i = 0; i < this.getOnlyValueInititedSize(); i++) {
      newArray[i] = this.array[i]; // array size
    }

    newArray[i] = value;

    this.array = [...newArray];

    return this.array;
  }

  deleteAtRandomWithPostion(position) {
    if (this.array[position] === undefined) {
      return -1;
    }

    let newArray = this.declareNewArray();
    let i;

    // copying elements till the new position
    for (i = 0; i < position; i++) {
      newArray[i] = this.array[i];
    }

    for (i = position; i < this.getSize() - 1; i++) {
      newArray[i] = this.array[i + 1];
    }

    this.array = [...newArray];

    return this.array;
  }

  deleteAtRandomWithValue(value) {
    return this.deleteAtRandomWithPostion(this.findElement(value));
  }

  deleteAtLast() {
    // FIXEME: make O(n)
    let newArray = this.declareNewArray();

    for (let i = 0; i < this.getOnlyValueInititedSize() - 1; i++) {
      newArray[i] = this.array[i];
    }

    this.array = [...newArray];

    return this.array;
  }
}

const array1 = new CustomArray([1, 2, 3, 4, 5, 6]);

// console.log(array1.findElement(3));
// console.table(array1.insertAtRandom(10, 3));
console.table(array1.insertAtLast(23));
// console.table(array1.deleteAtRandomWithPostion(1));
// console.table(array1.deleteAtRandomWithValue(5));
console.table(array1.deleteAtLast());
