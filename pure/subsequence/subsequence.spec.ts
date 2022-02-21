import { subsequence } from './subsequence';

describe('Return Value', () => {
  it('should be correct when subsequence present', () => {
    expect(subsequence('test', 'testing')).toBeTruthy();
    expect(subsequence('tst', 'testing')).toBeTruthy();
    expect(subsequence('tt', 'testing')).toBeTruthy();
    expect(subsequence('tg', 'testing')).toBeTruthy();
  });
  it('should be correct when subsequence not present', () => {
    expect(subsequence('testv', 'testing')).toBeFalsy();
    expect(subsequence('tzst', 'testing')).toBeFalsy();
    expect(subsequence('ttha', 'testing')).toBeFalsy();
    expect(subsequence('tga', 'testing')).toBeFalsy();
  });
});
