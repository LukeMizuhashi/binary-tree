module.exports = () => {
  let uut;
  let key = 0;
  let value = 'a';

  uut = new BinarySearchTree();
  uut.insert(key,value);
  assert.throws(
    () => {
      uut.insert(key,value);
    }
  );

  uut = new BinarySearchTree({ allowsDuplicates: true });
  uut.insert(key,value);
  assert.doesNotThrow(
    () => {
      uut.insert(key,value);
    }
  );
  assert(
    Array.isArray(uut.root.value),
    'Does not set BinaryNode.value to an array when '
  + 'options.allowsDuplicates is true'
  );
  assert.strictEqual(uut.root.value.length,2);
  assert.strictEqual(uut.root.value[0],value);
  assert.strictEqual(uut.root.value[1],value);
};

