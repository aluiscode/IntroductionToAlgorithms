import { Sort } from './Algorithms/Sort.ts';
import { Queue } from './Data Structures/Queue.ts';

// const array: number[] = [8,1,8,5,32,1,7,43,6,3,113,44,252,11];
// const array1: number[] = [8,1,8,5,32,1,7,43,6,3,113,44,252,11];
//
// Sort.mergeSort(array, 0, array.length-1);
// Sort.insertionSort(array1);
// console.log(array);
// console.log(array1);



const queue = new Queue();
console.log(queue.dequeue());
queue.enqueue(35);
console.log(queue.dequeue());
queue.enqueue(1222);
queue.enqueue(695);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

