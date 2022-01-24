const assert = require("assert");


// map operator to operation
const operatorMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    'x': (a, b) => a * b,
    '÷': (a, b) => a / b,
  };
  

class Node {
    constructor(operator, value, left, right) {
        this.operator = operator;
        this.value = value;
        this.left = left;
        this.right = right;
      }

      // converts to string
      toString() {
        if (this.operator) {
          return `(${this.left.toString()} ${this.operator} ${this.right.toString()})`;
        }
        return this.value.toString();
      }

      // Handles arithmetic operation
      operatorHandler() {
        return operatorMap[this.operator](this.left.result(), this.right.result());
      }

      // carries out arithmetic operation
      result() {
        if (this.operator) {
          return this.operatorHandler();
        }
        return this.value;
      }
}

const tree = new Node(
    '÷',
    null,
    new Node(
      '+',
      null,
      new Node('', 7, null, null),
      new Node(
        'x',
        null,
        new Node('-', null, new Node('', 3, null, null), new Node('', 2, null, null)),
        new Node('', 5, null, null),
      ),
    ),
    new Node('', 6, null, null),
  );

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());

module.exports = Node;