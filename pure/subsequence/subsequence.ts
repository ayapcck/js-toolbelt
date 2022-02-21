import { indexMap as getIndexMap } from '@ayapapaya/pure.index-map';

export function subsequence(search: any[] | string, test: any[] | string) {
  const input = Array.from(test);
  let indexMap = getIndexMap(input);
  let tI = -1;
  for (let sChar of search) {
      if (indexMap.has(sChar)) {
          let indiciesInT = indexMap.get(sChar);
          tI = indiciesInT.find((index: number) => index > tI) ?? -1;
      } else {
          return false;
      }
  }
  return tI !== -1;
}
