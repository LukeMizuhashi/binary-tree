module.exports = () => {
  let uut;
  let expectedValue;
  
  expectedValue = false;
  uut= new BinarySearchTree();
  assert.strictEqual(uut.root.allowsDuplicates,expectedValue);

  expectedValue = true;
  uut= new BinarySearchTree({
    allowsDuplicates: expectedValue,
  });
  assert.strictEqual(uut.root.allowsDuplicates,expectedValue);

  expectedValue = false;
  uut= new BinarySearchTree({
    allowsDuplicates: expectedValue,
  });
  assert.strictEqual(uut.root.allowsDuplicates,expectedValue);

  expectedValue = false;
  uut = new BinarySearchTree();
  uut.insert(0,'a');
  uut.insert(1,'b');
  uut.insert(2,'c');
  uut.insert(3,'d');
  uut.insert(4,'e');
  uut.insert(5,'f');
  uut.insert(6,'g');

  assert.strictEqual(uut.root.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.right.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.right.right.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.right.right.right.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.right.right.right.right.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.right.right.right.right.right.allowsDuplicates,expectedValue);

  expectedValue = true;
  uut= new BinarySearchTree({
    allowsDuplicates: expectedValue,
  });
  uut.insert(0,'a');
  uut.insert(1,'b');
  uut.insert(2,'c');
  uut.insert(3,'d');
  uut.insert(4,'e');
  uut.insert(5,'f');
  uut.insert(6,'g');

  assert.strictEqual(uut.root.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.right.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.right.right.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.right.right.right.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.right.right.right.right.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.right.right.right.right.right.allowsDuplicates,expectedValue);

  expectedValue = false;
  uut= new BinarySearchTree({
    allowsDuplicates: expectedValue,
  });
  uut.insert(0,'a');
  uut.insert(1,'b');
  uut.insert(2,'c');
  uut.insert(3,'d');
  uut.insert(4,'e');
  uut.insert(5,'f');
  uut.insert(6,'g');

  assert.strictEqual(uut.root.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.right.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.right.right.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.right.right.right.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.right.right.right.right.allowsDuplicates,expectedValue);
  assert.strictEqual(uut.root.right.right.right.right.right.right.allowsDuplicates,expectedValue);
}
