import { swap } from './swap';

it('should swap correct values', () => {
  let expectedArr = [1,3,2];
  let testArr = [1,2,3];
  swap(1,2,testArr);
  expect(testArr).toEqual(expectedArr);
});
it('should revert to original with two consecutive swaps', () => {
  let expectedArr = [1,2,3];
  let testArr = [1,2,3];
  swap(1,2,testArr);
  swap(1,2,testArr);
  expect(testArr).toEqual(expectedArr);
});
it('should throw when either index out of bounds', () => {
  let arr = [1,2,3];
  expect(() => swap(2, 3, arr)).toThrowError(new Error('3 does not correspond to an index in arr'));
  expect(() => swap(3, 2, arr)).toThrowError(new Error('3 does not correspond to an index in arr'));
});
