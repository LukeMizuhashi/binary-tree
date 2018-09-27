const BinaryNode = require('binary-node');

module.exports = class BinaryTree {
  constructor(options) {
    if (options instanceof this.NodeClass) {
      this.root = options;
    } else {
      this.root = this.nodeFactory(options);
    }
    this._row = 0;
    this._yad = 0;
    for (let node in this) {
      if (this._yad * 2 === this._row) {
        this._row++;
        this._yad = 0;
      } else {
        this._yad++;
      }
    }

    this._allowsDuplicates = this.root.allowsDuplicates;
    this._comparator = this.root.compare;
  }

  get allowsDuplicates() {
    return this._allowsDuplicates;
  }

  set allowsDuplicates(value) {
    throw new Error('This property can only be set when this class is instantiated');
  }

  get comparator() {
    return this._comparator;
  }

  set comparator(value) {
    throw new Error('This property can only be set when this class is instantiated');
  }

  get NodeClass() { // Read-only
    return BinaryNode;
  }

  nodeFactory(options) {
    options = options || {};

    options.allowsDuplicates = options.hasOwnProperty('allowsDuplicates') ?
        options.allowsDuplicates : this.allowsDuplicates; 

    options.comparator = options.comparator || this.comparator; 

    return new this.NodeClass(options);
  }

  isLeaf(node) {
    return node.left === null && node.right === null && node.value === undefined;
  }

  isRoot(node) {
    return node.parent === null;
  }

  insert(value) {
    const newNode = this.nodeFactory({ value: value });

    if (this._yad * 2 === this._row) {
      let newNodeParent = this.root;
      while (!this.isLeaf(newNodeParent.left)) {
        newNodeParent = newNodeParent.left;
      }
      newNodeParent.left.isolate();
      newNodeParent.left = newNode;
      this._row++;
      this._yad = 0;

    } else {
      if (this._yad % 2 === 0) {
        this._lastNode.parent.right,isolate();
        this._lastNode.parent.right = newNode;
      } else {

      }
      this._yad++;
    }
  }

  remove(targetNode) {
    let left;
    let right;
    let parent;
    let wasLeftChild;

    const patchUp = (replacement) => {
      replacement.left = left;
      replacement.right = right;
      if (parent) {
        if (wasLeftChild) {
          parent.left = replacement;
        } else {
          parent.right = replacement;
        }
      }
    };

    for (let node in this) {
      if (node === targetNode) {
        left = node.left;
        right = node.right;
        parent = node.parent;
        wasLeftChild = node.isLeftChild();
        node.isolate();
        if (left) {
          patchUp(new BinaryTree(left).maxNode);
        } else if (right) {
          patchUp(new BinaryTree(left).minNode);
        }
      }
    }
  }

  get maxNode() {
    return this._maxNode;
  }

  get minNode() {
    let currentNode = this.root;
    while (!currentNode.isLeaf()) {
      currentNode = currentNode.left;
    }
    return currentNode.parent;
  }

  get maxValue() {
    let result = this.maxNode;
    if (result) {
      result = result.value;
    }
    return result;
  }

  get minValue() {
    let result = this.minNode;
    if (result) {
      result = result.value;
    }
    return result;
  }

  search(key) {
    let currentNode = this.root;
    while (!currentNode.isLeaf()) {
      let comparison = currentNode.compare(key);
      if (comparison < 0) {
        currentNode = currentNode.left; 
      } else if (comparison == 0) {
        return currentNode;
      } else if (comparison > 0) {
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  }

  isValid() {
    let previousKey = undefined;
    for (let thisNode of this) {
      if (previousKey !== undefined && thisNode.key <= previousKey) {
        return false;
      }
      previousKey = thisNode.key;
    }
    return true;
  }

  [Symbol.iterator]() {

    let thisNode = this.minNode; 
    let maxNode = this.maxNode;
    let visited = new Set();

    return {
      next: () => {
        let result = {
          value: {
            key: thisNode.key,
            value: thisNode.value,
          },
          done: thisNode === maxNode,
        };
        visited.add(thisNode.key);

        let nextNode;
        if (!thisNode.left.isLeaf() && !visited.has(thisNode.left.key)) {
          nextNode = new BinaryTree(thisNode.left).minNode;
        } else if (!thisNode.right.isLeaf() && !visited.has(thisNode.right.key)) {
          nextNode = new BinaryTree(thisNode.right).minNode;
        } else if (thisNode.parent && !thisNode.parent.isLeaf()) {
          if (!visited.has(thisNode.parent.key)) {
            nextNode = thisNode.parent;
          } else if (thisNode !== maxNode) {
            nextNode = thisNode.parent.parent;
          } else {
            nextNode = thisNode;
          }
        }
        thisNode = nextNode;

        return result; 
      },
    };
  }

};

