module.exports = () => {
  const uut = new BinarySearchTree();
  assert(uut.root.isLeaf(),'Root is not a leaf node');
};

