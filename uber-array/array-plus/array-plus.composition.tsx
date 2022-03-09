import { ArrayPlus } from './array-plus';

export function EmptyArray() {
  return new ArrayPlus();
}

export function PrimitiveTypeArray() {
  return new ArrayPlus(1, 2, 3);
}

export function MixedTypeArray() {
  return new ArrayPlus(1, [ 'test' ], 3);
}
