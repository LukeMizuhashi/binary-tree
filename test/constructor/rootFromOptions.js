module.exports = () => {
  let options = new BinaryNode();
  let uut = new BinarySearchTree(options);
  assert.strictEqual(options.root,uut.root.root);
  assert.strictEqual(options.value,uut.root.value);
  assert.strictEqual(options.left,uut.root.right);
  assert.strictEqual(options.left,uut.root.right);
};

