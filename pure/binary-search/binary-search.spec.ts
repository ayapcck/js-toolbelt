import { binarySearch } from './binary-search';

function InputGenerator() {}

InputGenerator.getEvenArray = function() {
  return [ 1, 2, 5, 12, 19, 32, 46, 67, 83, 100 ];
}

InputGenerator.getOddArray = function() {
  return [ 1, 2, 5, 12, 19, 32, 46, 67, 83, 100, 123 ];
}

describe('Even Length Arrays', () => {
  describe('Return Value', () => {
    it('should be correct for first element', () => {
      const testData = InputGenerator.getEvenArray();
      const firstValue = testData[0];
      expect(binarySearch(testData, firstValue, 0)).toBe(0);
    });
    it('should be correct for elements on either side of mid point', () => {
      const testData = InputGenerator.getEvenArray();
      const rightMidPoint = testData.length  / 2;
      const leftMidPoint = rightMidPoint - 1;
      expect(binarySearch(testData, testData[rightMidPoint], 0)).toBe(rightMidPoint);
      expect(binarySearch(testData, testData[leftMidPoint], 0)).toBe(leftMidPoint);
    });
    it('should be correct for last element', () => {
      const testData = InputGenerator.getEvenArray();
      const lastIndex = testData.length - 1;
      const lastValue = testData[lastIndex];
      expect(binarySearch(testData, lastValue, 0)).toBe(lastIndex);
    });
  });
});
describe('Odd Length Arrays', () => {
  describe('Return Value', () => {
    it('should be correct for first element', () => {
      const testData = InputGenerator.getOddArray();
      const firstValue = testData[0];
      expect(binarySearch(testData, firstValue, 0)).toBe(0);
    });
    it('should be correct for middle element', () => {
      const testData = InputGenerator.getOddArray();
      const middleIndex = (testData.length + 1) / 2;
      const middleValue = testData[middleIndex];
      expect(binarySearch(testData, middleValue, 0)).toBe(middleIndex);
    });
    it('should be correct for last element', () => {
      const testData = InputGenerator.getOddArray();
      const lastIndex = testData.length - 1;
      const lastValue = testData[lastIndex];
      expect(binarySearch(testData, lastValue, 0)).toBe(lastIndex);
    });
  });
});
