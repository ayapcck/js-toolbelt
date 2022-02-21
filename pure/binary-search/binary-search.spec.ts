import { binarySearch } from './binary-search';

function InputGenerator() {}

InputGenerator.getEvenArray = function() {
  return [ 1, 2, 5, 12, 19, 32, 46, 67, 83, 100 ];
}

InputGenerator.getOddArray = function() {
  return [ 1, 2, 5, 12, 19, 32, 46, 67, 83, 100, 123 ];
}

const ARRAY_TYPES = [
  ['Even Length', 'getEvenArray'],
  ['Odd Length', 'getOddArray'],
];

for (let [arrayParity, parityFunc] of ARRAY_TYPES) {
  describe(`${arrayParity}`, () => {
    describe('Return Value', () => {
      it('should be correct when target is first element', () => {
        const testData = InputGenerator[parityFunc]();
        const firstValue = testData[0];
        expect(binarySearch(testData, firstValue, 0)).toBe(0);
      });
      it('should be correct when target is last element', () => {
        const testData = InputGenerator[parityFunc]();
        const lastIndex = testData.length - 1;
        const lastValue = testData[lastIndex];
        expect(binarySearch(testData, lastValue, 0)).toBe(lastIndex);
      });
      it('should be correct for large element not in list', () => {
        const testData = InputGenerator[parityFunc]();
        expect(binarySearch(testData, 1000, 0)).toBe(-1);
      });
      it('should be correct when small target not in list', () => {
        const testData = InputGenerator[parityFunc]();
        expect(binarySearch(testData, -1, 0)).toBe(-1);
      });
      it('should be correct when searching for smallest value larger than target', () => {
        const testData = InputGenerator.getEvenArray();
        expect(binarySearch(testData, 18, 0, null, { findSmallestGTTarget: true })).toBe(4);
        expect(binarySearch(testData, 13, 0, null, { findSmallestGTTarget: true })).toBe(4);
      });
    });
  });
}

describe('Even Length', () => {
  describe('Return Value', () => {
    it('should be correct when target is on either side of mid point', () => {
      const testData = InputGenerator.getEvenArray();
      const rightMidPoint = testData.length  / 2;
      const leftMidPoint = rightMidPoint - 1;
      expect(binarySearch(testData, testData[rightMidPoint], 0)).toBe(rightMidPoint);
      expect(binarySearch(testData, testData[leftMidPoint], 0)).toBe(leftMidPoint);
    });
  });
});
describe('Odd Length', () => {
  describe('Return Value', () => {
    it('should be correct for middle element', () => {
      const testData = InputGenerator.getOddArray();
      const middleIndex = (testData.length + 1) / 2;
      const middleValue = testData[middleIndex];
      expect(binarySearch(testData, middleValue, 0)).toBe(middleIndex);
    });
  });
});
