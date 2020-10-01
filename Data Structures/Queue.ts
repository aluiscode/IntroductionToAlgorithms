class Node {
  data: number;
  next?: Node;
  constructor(data: number){
    this.data=data;
    this.next = undefined;
  }
}

//FIFO
export class Queue{
  private head?: Node; //Where remove
  private tail?: Node; //Where add things

  constructor(){
    this.head = undefined;
    this.tail = undefined;
  }

  isEmpty(): boolean{
    return this.head === undefined;
  }

  enqueue(data: number): void{
    const node = new Node(data) ;
    if(this.tail !== undefined ){
      this.tail.next = node;
    }
    this.tail = node;
    if(!this.head){
      this.head= node;
    }
  }

  dequeue(): number | void{
    if(!this.head) return;
    const data = this.head.data;
    this.head = this.head.next;
    return data;
  }
}
