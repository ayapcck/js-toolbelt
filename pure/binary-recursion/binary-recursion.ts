/**
 * @returns the index at which the binary recursion stops while searching for target
 */
 export function binaryRecursion(
  iterable: number[],
  target: number,
  start: number = 0,
  end: number = null,
) {
  // Handles case where binary-recursion is called without an end integer (initial call)
  if (end === null) {
    end = iterable.length - 1;
  }

  // Base Case
  if (start >= end) {
    return start;
  }

  // Recursive step
  const middle = Math.floor((start + end) / 2);
  if (iterable[middle] > target) {
    end = middle - 1;
  } else if (iterable[middle] < target) {
    start = middle + 1;
  } else {
    return middle;
  }

  // Recursive call
  return binaryRecursion(iterable, target, start, end);
};