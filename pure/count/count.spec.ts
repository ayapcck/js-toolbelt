import { count } from './count';

const getInitialNumCount = () => {
  let count = new Map();
  count.set(1, 1);
  count.set(2, 1);
  count.set(3, 1);
  return count;
};

const getInitialStrCount = () => {
  let count = new Map();
  count.set("test", 1);
  count.set("one", 1);
  count.set("two", 1);
  return count;
};

const getInitialCharCount = () => {
  let count = new Map();
  count.set('t', 2);
  count.set('e', 1);
  count.set('s', 1);
  return count;
};

describe('Pure Function Adherence', () => {
  it('should not modify original array', () => {
    let inputArr = [1, 2, 3];
    let expectedArr = [1, 2, 3];
    count(inputArr);
    expect(inputArr).toEqual(expectedArr);
  });
});
describe('Method Functionality', () => {
  describe('Return Value', () => {
    it('should be correct for sorted, unique-valued, arrays', () => {
      let inputArr = [1, 2, 3];
      let expectedCount = getInitialNumCount();
      expect(count(inputArr)).toEqual(expectedCount);
    });
    it('should be correct for sorted, duplicate-containing, arrays', () => {
      let inputArr = [1, 1, 2, 3];
      let expectedCount = getInitialNumCount().set(1, 2);
      expect(count(inputArr)).toEqual(expectedCount);
    });
    it('should be correct for unsorted, unique-valued arrays', () => {
      let inputArr = [3, 1, 2];
      let expectedCount = getInitialNumCount();
      expect(count(inputArr)).toEqual(expectedCount);
    });
    it('should be correct for unsorted, duplicate-containing arrays', () => {
      let inputArr = [2, 1, 3, 1];
      let expectedCount = getInitialNumCount().set(1, 2);
      expect(count(inputArr)).toEqual(expectedCount);
    });
    it('should be empty for empty input array', () => {
      let inputArr = [];
      let expectedCount = new Map();
      expect(count(inputArr)).toEqual(expectedCount);
    });
  });
  describe('Input Types', () => {
    it('should work when input is number[]', () => {
      let inputArr = [1, 2, 3];
      let expectedCount = getInitialNumCount();
      expect(count(inputArr)).toEqual(expectedCount);
    });
    it('should work when input is string[]', () => {
      let inputArr = ['test', 'one', 'two'];
      let expectedCount = getInitialStrCount();
      expect(count(inputArr)).toEqual(expectedCount);
    });
    it('should work when input is char[]', () => {
      let inputArr = ['t', 'e', 's', 't'];
      let expectedCount = getInitialCharCount();
      expect(count(inputArr)).toEqual(expectedCount);
    });
    it('should work when input is string', () => {
      let input = 'test';
      let expectedCount = getInitialCharCount();
      expect(count(input)).toEqual(expectedCount);
    });
  });
});
