const LinkedList = require('./linkedlist');

describe('#addToHead', () => {
  test('adds element to start of list', () => {
    const ll = new LinkedList();
    ll.addToHead(10);
    const oldHead = ll.head;
    ll.addToHead(20);

    expect(ll.head.data).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.size).toBe(2);
  })
})


describe('#getByIndex', () => {
  describe('with index less then 0', () =>{
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10,20);

      expect(ll.getByIndex(-1)).toBeNull();
    })
  })

  describe('with index greater then list length', () =>{
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10,20);
      
      expect(ll.getByIndex(5)).toBeNull();
    })
  })

  describe('with index 0', () => {
    test('it returns the head', () => {
      const ll = LinkedList.fromValues(10,20);
      
      expect(ll.getByIndex(0).data).toBe(10);
    })
  })

  describe('with index in middle', () => {
    test('it returns the middle value', () => {
      const ll = LinkedList.fromValues(10,20,30,40,50);
      
      expect(ll.getByIndex(2).data).toBe(30);
    })
  })

})