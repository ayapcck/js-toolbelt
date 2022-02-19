const errorMsg = (index: number) => new Error(`${index} is not a valid index in input`);

/**
 * 
 * @param i first index
 * @param j second index
 * @param input input to swap elements in
 * @returns array with desired elements swapped
 */
export function swap(i: number, j: number, input: any[]) {
    if (i >= input.length) throw errorMsg(i);
    if (j >= input.length) throw errorMsg(j);

    let arr = [ ...input ];

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}
