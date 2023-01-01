const LinkedList = require('./LinkedList')

const ll = new LinkedList();
ll.addToHead(10);
ll.addToHead(20);
ll.addToHead(30);
ll.print();
console.log(ll.getByIndex(0).value);