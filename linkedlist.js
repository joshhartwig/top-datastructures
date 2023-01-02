class LinkedList {
  constructor(){
    this.head = null;
    this.length = 0;
  }

  // Adds new node to end of list
  Append(value) {
    let current = this.head;
    let end = this.length - 1;
    for(let i = 0; i < end; i++){
      current = current.next;
    }
    const node = new Node(value, null);
    current.next = node;
    this.length++;
  }

  // Returns value at an index in linked list
  At(index) {
    if(index < 0 || index > this.length) return null;

    let current = this.head;
    let count = 0;
    while(count < index) {
      current = current.next;
      count++;
    }
    return current.value;
  }

  // Add new node to start of linked list
  Prepend(value) {
    const node = new Node(value, this.head);
    this.head = node;
    this.length ++;
  }

  // Add node at indexed location in list
  InsertAt(value,index) {
    if(index > this.length - 1) return 'Error index out of range';
    if(index === this.length) {
      this.Append(value);
    } 

    let prevNode = null;
    let current = this.head;
    let postNode = null;
    
    for(let i = 0; i < index; i++){ 
      if(i === index - 1) {
        prevNode = current;
      } 
      console.log(current.value)
      current = current.next;  
    }
    postNode = current.next;

    const node = new Node(value, current);
    prevNode.next = node;
    this.length++;
  }

  // Removes at indexed location in list
  RemoveAt(index) {
    // if the index is out of bounds return error
    if(index > this.length - 1 || index < 0) return 'Error index out of range';
    
    let current = this.head;
    let prevNode = null;
    let postNode = null;

    // if index is the 1st element, advance current and set this.head to second element
    if(index === 0) {
      postNode = current.next;
      this.head = postNode;
    } else {
      // get the pre and post elements of the index
      for(let i = 0; i < index; i++){ 
        console.log(current.value);
        prevNode = current;
        current = current.next; 
      }

      postNode = current.next;
      prevNode.next = postNode;
      this.length --;
    }
  }

  // Returns true if a specific value is found in the list
  Contains(value){
    let count = 0;
    let current = this.head;

    while(count < this.length) {
      if(current.value === value) {
        return true;
      } else {
        count++;
        current = current.next;
      }      
    }

    return false; // cannot find value;
  }

  // Returns index where value is found
  Find(value) {
    let count = 0;
    let current = this.head;

    while(count < this.length) {
      if(current.value === value) {
        return count;
      } else {
        count++;
        current = current.next;
      }      
    }

    return null; // cannot find value;
  }

  // Returns last node in the linked list
  Tail(){
    let current = this.head;
    let count = 1;
    while(count < this.length) {
      current = current.next;
      count++;
    }
    return current.value;
  }

  // Returns size on linked list
  Size() {
    return this.length;
  }

  // Returns first value in linked list
  Head() {
    return this.head.value;
  }

  // Removes the last element from link list
  Pop() {
    let current = this.head;
    let prevNode = null;
    for(let i = 0; i < this.length - 2; i++) {
      current = current.next;
    }
    current.next = null;  // remove ref to last entry
    this.length --;
  }

  // Prints lists nodes value to string
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

// Creates a linked list from values
LinkedList.fromValues = function(...values) {
  const ll = new LinkedList();
  for(let i = 0; i < values.length; i++){
    console.log(values[i])
    ll.Prepend(values[i]);
  }
  return ll;
}

class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList