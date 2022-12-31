class LinkedList {
  constructor(){
    this.head = null;
    this.length = 0;
  }

  // (fix) add new node to end of list
  Append(value) {
    // loop to end of the list and get the last node
    // add a new node 
    // set prev node's next it new node
    // set new node's next to null
    // increment length
  }

  // return value at an index in linked list
  At(index) {
    if(index > this.length + 1) return null;

    let current = this.head;
    let count = 0;
    while(count < index) {
      current = current.next;
      count++;
    }
    return current.value;
  }

  // add new node to start of list
  Prepend(value) {
    const node = new Node(value, this.head);
    this.head = node;
    this.length ++;
  }

  // (fix) adds node at a specific location
  InsertAt(index) {
    return null;
  }

  // (fix) removes at specific location
  RemoveAt(index) {
    return null;
  }

  // (fix) returns true if the value is found
  Contains(value){

  }

  // (fix) returns index where value is found
  Find(value) {

  }

  //return last node in the linked list
  Tail(){
    let current = this.head;
    let count = 1;
    while(count < this.length) {
      current = current.next;
      count++;
    }
    return current.value;
  }

  // returns size on linked list
  Size() {
    return this.Size;
  }

  // returns first value in linked list
  Head() {
    return this.head.value;
  }

  // (fix) removes the last element from link list
  Pop() {

  }

  // prints lists nodes value to string
  ToString(){
    let output = '';
    let current = this.head;
    while(current != null) {
      output += `${current.value} ->`;
      current = current.next;
    }
    console.log(`${output} null`);
  }
}

class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList

let ll = new LinkedList();
ll.Prepend(10);
ll.Prepend(20);
ll.Prepend(30);

console.log(ll);
ll.ToString();
console.log(ll.Head());
console.log(ll.Tail());
console.log(ll.At(0));