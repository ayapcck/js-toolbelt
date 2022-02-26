import { binaryRecursion } from "@ayapapaya/pure.binary-recursion";

export function smallestGTTarget(
  iterable: number[],
  target: number,
  start: number = 0,
  end: number = null,
) {
  const startIndex = binaryRecursion(iterable, target, start, end);
  return target > iterable[startIndex]
    ? startIndex + 1
    : startIndex
}
