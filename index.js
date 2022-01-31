class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    let maxNum = 0;
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      for (let i = 0; i < this.length; i++) {
        if (maxNum <= this.items[i]) {
          maxNum = this.items[i];
        } else {
          continue;
        }
      }
    }
    return maxNum;
  }

  min() {
    let minNum = this.items[0];
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      for (let i = 0; i < this.length; i++) {
        if (this.items[i] < minNum) {
          minNum = this.items[i];
        } else {
          continue;
        }
      }
    }
    return minNum;
  }

  sum() {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += this.items[i];
    }
    return sum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
