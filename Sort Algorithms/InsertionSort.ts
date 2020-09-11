console.time('Start')
const array: number[] = [8,1,8,5,32,1,7,43,6,3,113,44,252,11];

function InsertionSort(arr: number[]){
  for(let i = 1; i < arr.length; i++ ){
    let key= arr[i];
    let j= i-1;
    while(j>=0 && arr[j]>key){
      arr[j+1] = arr[j];
      j= j-1;
    }
    arr[j+1]=key;
  }
  return arr;
}

console.log(InsertionSort(array));
console.timeEnd('Start')
