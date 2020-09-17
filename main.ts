import { Sort } from './Algorithms/Sort.ts'

const array: number[] = [8,1,8,5,32,1,7,43,6,3,113,44,252,11];
const array1: number[] = [8,1,8,5,32,1,7,43,6,3,113,44,252,11];

Sort.mergeSort(array, 0, array.length-1);
Sort.insertionSort(array1);
console.log(array);
console.log(array1);
