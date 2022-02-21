import { indexMap } from './index-map';

describe('Return Value', () => {
  it('should be correct for numbers', () => {
    let expectedIndexMap = new Map();
    expectedIndexMap.set(1, [ 0, 4, 10 ]);
    expectedIndexMap.set(2, [ 1, 11, 12 ]);
    expectedIndexMap.set(3, [ 2, 3, 5, 9]);
    expectedIndexMap.set(5, [ 6, 7 ]);
    expectedIndexMap.set(6, [ 8 ]);
    expect(indexMap([1,2,3,3,1,3,5,5,6,3,1,2,2])).toEqual(expectedIndexMap);
  });
});
