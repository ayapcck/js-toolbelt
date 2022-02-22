import { binaryRecursion } from './binary-recursion';

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
        expect(binaryRecursion(testData, firstValue)).toBe(0);
      });
      it('should be correct when target is last element', () => {
        const testData = InputGenerator[parityFunc]();
        const lastIndex = testData.length - 1;
        const lastValue = testData[lastIndex];
        expect(binaryRecursion(testData, lastValue)).toBe(lastIndex);
      });
      it('should be correct when target is larger than numbers in list', () => {
        const testData = InputGenerator[parityFunc]();
        expect(binaryRecursion(testData, 1000)).toBe(testData.length - 1);
      });
      it('should be correct when target is smaller than numbers in list', () => {
        const testData = InputGenerator[parityFunc]();
        expect(binaryRecursion(testData, -1)).toBe(0);
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
      expect(binaryRecursion(testData, testData[rightMidPoint])).toBe(rightMidPoint);
      expect(binaryRecursion(testData, testData[leftMidPoint])).toBe(leftMidPoint);
    });
    it('should test', () => {
      const testData = InputGenerator.getEvenArray();
      expect(binaryRecursion(testData, 15)).toBe(3);
      expect(binaryRecursion(testData, 11)).toBe(3);
      expect(binaryRecursion(testData, 6)).toBe(3);
    });
  });
});
describe('Odd Length', () => {
  describe('Return Value', () => {
    it('should be correct for middle element', () => {
      const testData = InputGenerator.getOddArray();
      const middleIndex = (testData.length + 1) / 2;
      const middleValue = testData[middleIndex];
      expect(binaryRecursion(testData, middleValue)).toBe(middleIndex);
    });
    it('should test', () => {
      const testData = InputGenerator.getOddArray();
      expect(binaryRecursion(testData, 15)).toBe(4);
      expect(binaryRecursion(testData, 11)).toBe(3);
      expect(binaryRecursion(testData, 6)).toBe(3);
    });
  });
});
