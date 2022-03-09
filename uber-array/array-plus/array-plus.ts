interface callbackFn {
  (
    element: any,
    index?: number,
    array?: any[],
  ): any
}

export class ArrayPlus extends Array {
  constructor(...args) {
    super(...args);
  }

  // Returns an instance of ArrayPlus with specified length
  // Values start from startsAt, and each consecutive value differs by 1
  static ofIndices(length: number, startsAt: number): ArrayPlus {
    let start = new ArrayPlus(length);
    return start.map((_, index) => startsAt + index);
  }

  copy(): any[] {
    return [ ...this ];
  }

  deepCopy(): ArrayPlus {
    return JSON.parse(JSON.stringify(this));
  }

  inRange(index: number): boolean {
    return index >= 0 && index < this.length;
  }

  map(callbackFn: callbackFn, thisArg = this): ArrayPlus {
    let returnArr = new ArrayPlus();
    for (let i = 0; i < thisArg.length; i++) {
      let element = thisArg[i];
      returnArr.push(callbackFn(element, i, thisArg));
    }
    return returnArr;
  }

  swap(index1: number, index2: number): void {
    if (!(this.inRange(index1) && this.inRange(index2))) throw new Error('One or both indices out of range');

    let temp = this[index1];
    this[index1] = this[index2];
    this[index2] = temp;
  }
}
