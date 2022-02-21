export function indexMap(iterable: any[]) {
  let indexMap = new Map();
  for (let index in iterable) {
    let intIndex = parseInt(index, 10);
    let charIndicies = indexMap.get(iterable[intIndex]);
    if (charIndicies) {
      charIndicies.push(intIndex);
      indexMap.set(iterable[intIndex], charIndicies);
    } else {
      indexMap.set(iterable[intIndex], [intIndex]);
    }
  }
  return indexMap;
}
