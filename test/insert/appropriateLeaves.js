module.exports = () => {
  const errorMessage = 'Does not insert nodes in expected locations';
  let uut;
 
  uut = new BinarySearchTree();
  uut.insert(0,'a');
  uut.insert(1,'b');
  uut.insert(2,'c');
  uut.insert(3,'d');
  uut.insert(4,'e');
  uut.insert(5,'f');
  uut.insert(6,'g');

  assert(uut.root.value === 'a',errorMessage);
  assert(uut.root.right.value === 'b',errorMessage);
  assert(uut.root.right.right.value === 'c',errorMessage);
  assert(uut.root.right.right.right.value === 'd',errorMessage);
  assert(uut.root.right.right.right.right.value === 'e',errorMessage);
  assert(uut.root.right.right.right.right.right.value === 'f',errorMessage);
  assert(uut.root.right.right.right.right.right.right.value === 'g',errorMessage);

  uut = new BinarySearchTree();
  uut.insert(6,'g');
  uut.insert(5,'f');
  uut.insert(4,'e');
  uut.insert(3,'d');
  uut.insert(2,'c');
  uut.insert(1,'b');
  uut.insert(0,'a');

  assert(uut.root.value === 'g',errorMessage);
  assert(uut.root.left.value === 'f',errorMessage);
  assert(uut.root.left.left.value === 'e',errorMessage);
  assert(uut.root.left.left.left.value === 'd',errorMessage);
  assert(uut.root.left.left.left.left.value === 'c',errorMessage);
  assert(uut.root.left.left.left.left.left.value === 'b',errorMessage);
  assert(uut.root.left.left.left.left.left.left.value === 'a',errorMessage);

  uut = new BinarySearchTree();
  uut.insert(3,'d');
  uut.insert(5,'f');
  uut.insert(6,'g');
  uut.insert(4,'e');
  uut.insert(1,'b');
  uut.insert(2,'c');
  uut.insert(0,'a');

  assert(uut.root.value === 'd',errorMessage);
  assert(uut.root.right.value === 'f',errorMessage);
  assert(uut.root.right.right.value === 'g',errorMessage);
  assert(uut.root.right.left.value === 'e',errorMessage);
  assert(uut.root.left.value === 'b',errorMessage);
  assert(uut.root.left.right.value === 'c',errorMessage);
  assert(uut.root.left.left.value === 'a',errorMessage);
}
