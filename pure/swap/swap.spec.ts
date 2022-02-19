import { swap } from './swap';

describe('Pure Function Adherence', () => {
  it('should not modify original array', () => {
    let inputArr = [1,2,3];
    let expectedArr = [1,2,3];
    swap(0, 1, inputArr);
    expect(inputArr).toEqual(expectedArr);
  });
});
describe('Method Functionality', () => {
  it('should swap correct values', () => {
    let inputArr = [1,2,3];
    let expectedArr = [1,3,2];
    expect(swap(1,2,inputArr)).toEqual(expectedArr);
  });
  it('should be able to "undo" a swap by performing the same swap', () => {
    let inputArr = [1,2,3];
    let expectedArr = [1,2,3];
    swap(1,2,inputArr);
    swap(1,2,inputArr);
    expect(inputArr).toEqual(expectedArr);
  });
});
describe('Error Handling', () => {
  it('should throw error when either index out of bounds', () => {
    let arr = [1,2,3];
    let errorMsg = '3 is not a valid index in input';
    expect(() => swap(2, 3, arr)).toThrowError(new Error(errorMsg));
    expect(() => swap(3, 2, arr)).toThrowError(new Error(errorMsg));
  });
});
