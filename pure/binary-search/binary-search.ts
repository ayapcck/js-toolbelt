export function binarySearch(
    iterable: number[],
    target: number,
    start: number = 0,
    end: number = -1,
  ) {
    // Setup
  	if (end === -1) {
      // Handles case where binarySearch is called without an end integer (initial call)
  		end = iterable.length - 1;
  	}

    // Base Case
  	if (start > end) {
  		return null;
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
  	return binarySearch(iterable, target, start, end);
};
