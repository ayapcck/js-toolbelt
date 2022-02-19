/**
 * Counts the frequency of each unique element appearing in elements
 * @param elements to be counted
 * @returns a hashmap of `value: count` pairs
 */
export function count(elements: string | any[]) {
  let count = new Map();
  for (let num of elements) {
      count.set(num, (count.get(num) ?? 0) + 1);
  }
  return count;
}
