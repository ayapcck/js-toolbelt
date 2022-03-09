import { ArrayPlus } from './array-plus';
import {
  PrimitiveTypeArray,
  EmptyArray,
  MixedTypeArray,
} from './array-plus.composition'

describe('Constructor', () => {
  it('should return empty array with no input', () => {
    expect(EmptyArray()).toEqual([]);
  });
  it('should return basic array with list of numbers', () => {
    const expectedArray = [1, 2, 3];
    expect(PrimitiveTypeArray()).toEqual(expectedArray);
  });
  it('should handle single parameter', () => {
    const testArr = new ArrayPlus(3);
    expect(testArr.length).toBe(3);
  });
});

describe('Copy', () => {
  it('should return shallow copy of data (primitive types)', () => {
    let firstArray = PrimitiveTypeArray();
    let copiedArray = firstArray.copy();
    copiedArray[1] = 10;
    expect(copiedArray[1]).toBe(10);
    expect(firstArray[1]).toBe(2);
  });
  it('should return shallow copy of data (mixed types)', () => {
    let firstArray = MixedTypeArray();
    let copiedArray = firstArray.copy();
    let testVal: string = 'test1';
    copiedArray[1][0] = testVal;
    expect(copiedArray[1][0]).toBe(testVal);
    expect(firstArray[1][0]).toBe(testVal);
  });
});

describe('Deep Copy', () => {
  it('should return deep copy of data (mixed types)', () => {
    let firstArray = MixedTypeArray();
    let copiedArray = firstArray.deepCopy();
    let testVal: string = 'test1';
    copiedArray[1][0] = testVal;
    expect(copiedArray[1][0]).toBe(testVal);
    expect(firstArray[1][0]).toBe('test');
  });
});

describe('In Range', () => {
  it('should return true for index within bounds of array', () => {
    const testArr = PrimitiveTypeArray();
    expect(testArr.inRange(2)).toBeTruthy();
  });
  it('should return false for index out of bounds of array', () => {
    const testArr = PrimitiveTypeArray();
    expect(testArr.inRange(3)).toBeFalsy();
  });
  it('should return false for negative index', () => {
    const testArr = PrimitiveTypeArray();
    expect(testArr.inRange(-1)).toBeFalsy();
  });
});

describe('Of Indices', () => {
  it('should work', () => {
    let testArr = ArrayPlus.ofIndices(3, 1);
    expect(testArr).toEqual(PrimitiveTypeArray());
  });
});

describe('Map', () => {
  it('should have return type of ArrayPlus', () => {
    let testArr = PrimitiveTypeArray();
    let mapped = testArr.map(x => x + 1);
    expect(mapped).toBeInstanceOf(ArrayPlus);
  });
  it('should handle mapping properly', () => {
    let testArr = PrimitiveTypeArray();
    let mapped = testArr.map(x => x + 1);
    expect(mapped[0]).toBe(testArr[0] + 1);
  });
});

describe('Swap', () => {
  it('should swap values corresponding to specified indices', () => {
    const testArr = new ArrayPlus(1, 2, 3, 4);
    const copiedArray = testArr.copy();
    testArr.swap(1, 2);
    expect(testArr[1]).toBe(copiedArray[2]);
    expect(testArr[2]).toBe(copiedArray[1]);
  });
  it('should be able to swap the first index', () => {
    const testArr = new ArrayPlus(1, 2, 3, 4);
    const copiedArray = testArr.copy();
    testArr.swap(0, 2);
    expect(testArr[0]).toBe(copiedArray[2]);
    expect(testArr[2]).toBe(copiedArray[0]);
  });
  it('should be able to swap the last index', () => {
    const testArr = new ArrayPlus(1, 2, 3, 4);
    const copiedArray = testArr.copy();
    testArr.swap(0, 3);
    expect(testArr[0]).toBe(copiedArray[3]);
    expect(testArr[3]).toBe(copiedArray[0]);
  });
  it('should throw error when either index is negative', () => {
    const testArr = new ArrayPlus(1, 2, 3, 4);
    expect(() => testArr.swap(-1, 2)).toThrowError();
    expect(() => testArr.swap(1, -1)).toThrowError();
  });
  it('should throw error when either index is out of range', () => {
    const testArr = new ArrayPlus(1, 2, 3, 4);
    expect(() => testArr.swap(0, 5)).toThrowError();
    expect(() => testArr.swap(5, 0)).toThrowError();
  });
});