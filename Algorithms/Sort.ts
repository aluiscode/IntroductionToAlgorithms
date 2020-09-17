/**
 * Introduction to algorithms
 * Sort
 */
export class Sort{
  public static insertionSort(arr: number[]){
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

  private static merge(arr: number[], start:number, middle:number, end:number):void{
    //0 6 13
    let n1 = middle - start; //6
    let n2 = end - middle - 1; //7

    let left:number[] = new Array(n1 + 1); //7
    let right: number[] = new Array(n2 + 1); //8

    for(let i=0; i<=n1; i++){
      left[i] = arr[start + i];
    }
    for(let j=0; j<=n2; j++){
      right[j]= arr[middle + j + 1]
    }

    left[n1+1] = 9999;
    right[n2+1] = 9999;

    let i:number= 0;
    let j:number= 0;

    for(let k=start; k<=end; k++){
      if(left[i]<=right[j]){
        arr[k] = left[i];
        i++;
      }else{
        arr[k] = right[j]
        j++;
      }
    }
  }

  public static mergeSort(arr: number[], start:number, end:number):void{
    if(start < end){
      let middle= Math.floor((start+end)/2);
      this.mergeSort(arr, start, middle);
      this.mergeSort(arr, middle + 1, end);
      this.merge(arr ,start ,middle ,end );
    }
  }
};
