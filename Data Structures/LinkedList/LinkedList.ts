import { DS } from './Node.ts';

export class LinkedList {
  head: DS.Node;

  public append(data: number): void{
    if(this.head === null){
      this.head = new DS.Node(data);
      return;
    }

    let current = this.head;
    while(current.next !== null){
      current = current.next;
    }
    current.next = new DS.Node(data)
  }

  public prepend(data: number):void {
    let newHead = new DS.Node(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  public deleteWithValue(data: number):void{
    if(this.head === null) return;

    if(this.head.data === data){
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while(current.next !== null){
      if(current.next.data === data){
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
}