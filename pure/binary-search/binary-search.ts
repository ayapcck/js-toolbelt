/**
 * 
 * @param iterable 
 * @param target 
 * @param start 
 * @param end 
 * @returns index of target in iterable or -1 if not found
 */
export function binarySearch(
    iterable: number[],
    target: number,
    start: number = 0,
    end: number = null,
  ) {
    // Setup
  	if (end === null) {
      // Handles case where binarySearch is called without an end integer (initial call)
  		end = iterable.length - 1;
  	}

    // Base Cases
	if (start === end) return iterable[start] === target ? start : -1;
  	if (start > end) return -1;

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
  	return binarySearch(iterable, target, start, end);
};
