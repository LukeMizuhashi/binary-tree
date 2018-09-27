module.exports = () => {
  let uut = new BinarySearchTree();
  let result = uut.insert(1,'a');
  assert.strictEqual(result.key,1);
  assert.strictEqual(result.value,'a');
  assert(result instanceof BinaryNode);
};

