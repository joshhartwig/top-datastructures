const LinkedList = require('./LinkedList');

// - - - - Prepend() Test - - - - - 
describe('#Prepend', () => {
  test('adds element to start of list', () => {
    const ll = new LinkedList();
    ll.Prepend(10);
    const oldHead = ll.head;
    ll.Prepend(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  })
})

// - - - - At() Test - - - - - 
describe('#At', () => {
  describe('with index less then 0', () =>{
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10,20);

      expect(ll.At(-1)).toBeNull();
    })
  })

  describe('with index greater then list length', () =>{
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10,20);
      
      expect(ll.At(5)).toBeNull();
    })
  })

  describe('with index 0', () => {
    test('it returns the head', () => {
      const ll = LinkedList.fromValues(10,20);
      
      expect(ll.At(0)).toBe(20);
    })
  })

  describe('with index in middle', () => {
    test('it returns the middle value', () => {
      const ll = LinkedList.fromValues(10,20,30,40,50);
      
      expect(ll.At(2)).toBe(30);
    })
  })

})

// - - - - Size() Test - - - - - 
describe('#Size', () => {
  describe('returns size of list', () =>{
    test('it returns 2', () => {
      const ll = LinkedList.fromValues(10,20);
      expect(ll.Size()).toBe(2);
    })
  })
})

// - - - - Append() Test - - - - - 
// todo: test for append to 0 sized list (should just prepend)
describe('#Append', () => {
  describe('returns correct size', () =>{
    test('it returns length', () => {
      const ll = LinkedList.fromValues(10,20);
      ll.Append(30);
      expect(ll.Size()).toBe(3);
    })
  })
  describe('returns correct values', () =>{
    test('appended value is last element', () => {
      const ll = LinkedList.fromValues(10,20);
      ll.Append(30);
      expect(ll.At(2)).toBe(30);
    }),
    test('first element is still the same', () => {
      const ll = LinkedList.fromValues(10,20);
      ll.Append(30);
      expect(ll.At(0)).toBe(20);  //[0] = 20, [1] = 10, [2] = 30
    })
  })
})

// - - - - FromValues() Test - - - - - 
describe('#FromValues', () => {
  describe('returns proper size of list', () =>{
    test('size returns 4', () => {
      const ll = LinkedList.fromValues(10,20,30,40);
      expect(ll.Size()).toBe(4);
    }),
    test('length returns 4', () => {
      const ll = LinkedList.fromValues(10,20,30,40);
      expect(ll.length).toBe(4);
    })
  })
  describe('values in correct order', () =>{
    test('last param is first', () => {
      const ll = LinkedList.fromValues(10,20,30,40);
      expect(ll.At(0)).toBe(40);
    }),
    test('first param is last element', () => {
      const ll = LinkedList.fromValues(10,20,30,40);
      expect(ll.At(3)).toBe(10);
    }),
    test('middle element is correct value', () => {
      const ll = LinkedList.fromValues(10,20,30,40,50);
      expect(ll.At(2)).toBe(30);
    })
  })
})

// - - - - Find() Test - - - - 
describe('#Find', () => {
  describe('finds correct index when value is found', () =>{
    test('find index where values is 30', () => {
      const ll = LinkedList.fromValues(10,20,30,40,50);
      expect(ll.Find(30)).toBe(2);
    }),
    test('find index where values is 50', () => {
      const ll = LinkedList.fromValues(10,20,30,40,50);
      expect(ll.Find(50)).toBe(0);
    }),
    test('return null if values is not contained in list', () => {
      const ll = LinkedList.fromValues(10,20,30,40,50);
      expect(ll.Find(35)).toBe(null);
    })
  })
})

// - - - - Pop() Test - - - - 
describe('#Pop', () => {
  describe('Ensure size is correct after pop', () =>{
    test('size should be 3 after pop', () => {
      const ll = LinkedList.fromValues(10,20,30,40);
      ll.Pop();
      expect(ll.Size()).toBe(3);
    }),
    test('Ensure correct values after pop', () => {
      const ll = LinkedList.fromValues(10,20,30,40,50);
      ll.Pop();
      expect(ll.At(0)).toBe(50);
      expect(ll.At(3)).toBe(20);
    }),
    test('Ensure we cannot pop a 1 element list', () => {
      const ll = LinkedList.fromValues(10);
      ll.Pop();
      expect(ll.At(0)).toBe(10);
    })
  })
})

// - - - - Tail() Test - - - - - 
describe('#Tail', () => {
  test('ensure correct element at end', () => {
    const ll = LinkedList.fromValues(10,20,30,40,50);
    expect(ll.Tail()).toBe(10);
  })
})

// - - - - Contains() Test - - - - - 
describe('#Contains', () => {
  test('return true for found value', () => {
    const ll = LinkedList.fromValues(10,20,30,40,50);
    expect(ll.Contains(50)).toBe(true);
  }),
  test('return false for found value not found', () => {
    const ll = LinkedList.fromValues(10,20,30,40,50);
    expect(ll.Contains(60)).toBe(false);
  })
})

// - - - - InsertAt() Test - - - - - 
describe('#InsertAt', () => {
  test('verify insert worked and at correct index', () => {
    const ll = LinkedList.fromValues(10,20,30,40,50);
    ll.InsertAt(122,3);
    expect(ll.At(3)).toBe(122);
    expect(ll.Size()).toBe(6);
  }),
  test('ensure insert at last element works', () => {
    const ll = LinkedList.fromValues(10,20,30,40,50);
    ll.InsertAt(99,4);
    expect(ll.At(4)).toBe(99);
  }),
  test('verify pre and post elements of mid insert', () => {
    const ll = LinkedList.fromValues(10,20,30,40,50);
    ll.InsertAt(99,2);  // [0]50, [1]40, [2]99, [3]30, [4]20
    expect(ll.At(2)).toBe(99);
    expect(ll.At(1)).toBe(40);
    expect(ll.At(3)).toBe(30);
  })
})

// - - - - RemoveAt() Test - - - - - 
describe('#RemoveAt', () => {
  test('expect size to be correct post move', () => {
    const ll = LinkedList.fromValues(10,20,30,40,50);
    ll.RemoveAt(2); // 0-50,1-40,2-20,3-10
    expect(ll.Size()).toBe(4);
  }),
  test('expect values at correct indexs post remove', () => {
    const ll = LinkedList.fromValues(10,20,30,40,50);
    ll.RemoveAt(2); // 0-50,1-40,2-20,3-10
    expect(ll.At(1)).toBe(40);
    expect(ll.At(2)).toBe(20);
    expect(ll.At(3)).toBe(10);
  }),
  test('ensure out of bounds index returns error', () => {
    const ll = LinkedList.fromValues(10,20,30,40,50);
    expect(ll.RemoveAt(5)).toBe('Error index out of range');
  })
})