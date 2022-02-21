interface Options {
  findSmallestGTTarget?: boolean;
};

/**
 * @returns index of target in iterable or -1 if not found
 */
export function binarySearch(
    iterable: number[],
    target: number,
    start: number = 0,
    end: number = null,
    options: Options = {},
  ) {
	  // Handles case where binarySearch is called without an end integer (initial call)
  	if (end === null) {
	  	end = iterable.length - 1;
  	}

    // Base Case
  	if (start >= end) {
      const { findSmallestGTTarget = false } = options;
      if (findSmallestGTTarget) return getIndexOfFirstGTTarget(iterable, target, start);
      else return getIndexOfTarget(iterable, target, start);
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
  	return binarySearch(iterable, target, start, end, options);
};

const getIndexOfFirstGTTarget = (iterable: number[], target: number, start: number) => (
  target > iterable[start]
    ? start + 1
    : start
);

const getIndexOfTarget = (iterable: number[], target: number, start: number) => (
  iterable[start] === target
    ? start
    : -1
);
