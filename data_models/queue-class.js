'use strict';

class _Node {
  constructor(value){
    this.value=value;
    this.next=null;
    this.prev=null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }

  dequeue(){
    if (this.first === null){
      return null;
    }

    const node = this.first;
    this.first = node.prev;

    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }

  //TO SEED DB WITH ANIMALS

  enqueue(data){
    const node = new _Node(data);
    if(this.first === null){
      this.first = node;
    }

    if(this.last){
      node.next = this.last;
      this.last.prev = node;
    }
    
    this.last = node;
  }

  peak(){
    return this.first;
  }
}

module.exports = Queue;