export function swap(i, j, arr) {
  if (i >= arr.length) throw new Error(`${i} does not correspond to an index in arr`);
  if (j >= arr.length) throw new Error(`${j} does not correspond to an index in arr`);

	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};