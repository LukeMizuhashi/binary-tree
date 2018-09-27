global.BinaryTree = require('../src/constructor.js');
global.BinaryNode = require('binary-node');
global.assert = require('chai').assert;

const describeConstructor = require('./constructor/description.js');
const describeInsert = require('./insert/description.js');
const describeMaxNode = require('./maxNode/description.js');
const describeMinNode = require('./minNode/description.js');
const describeMaxValue = require('./maxValue/description.js');
const describeMinValue = require('./minValue/description.js');
const describeRemove = require('./remove/description.js');
const describeIterator = require('./iterator/description.js');
const describeIsValid = require('./isValid/description.js');

describe('BinaryTree',() => {

  describeConstructor();
  describe('BinaryTree.insert',describeInsert);
  describe('BinaryTree.maxNode',describeMaxNode);
  describe('BinaryTree.minNode',describeMinNode);
  describe('BinaryTree.maxValue',describeMaxNode);
  describe('BinaryTree.minValue',describeMinValue);
  describe('BinaryTree.remove',describeRemove);
  describe('BinaryTree.iterator',describeIterator);
  describe('BinaryTree.isValid',describeIsValid);
});

