const LinkedList = require('./LinkedList');

// Test Fixture for Prepend()
describe('#Prepend - add to start of list', () => {
  test('adds element to start of list', () => {
    const ll = new LinkedList();
    ll.Prepend(10);
    const oldHead = ll.head;
    ll.Prepend(20);

    expect(ll.head.data).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.size).toBe(2);
  })
})

// Test Fixture for At()
describe('#At - Get by Index', () => {
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