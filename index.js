// const assert = require("assert");

class Node {
    constructor(operator, value, left, right) {
        this.operator = operator;
        this.value = value;
        this.left = left;
        this.right = right;
      }

      toString() {
        if (this.operator) {
          return `(${this.left.toString()} ${this.operator} ${this.right.toString()})`;
        }
        return this.value.toString();
      }
}



// const Node = (operator, value, left, right) => {
//   const result = function () {
//     switch (this.operator) {
//       case "+":
//         return left.result() + right.result();
//       case "-":
//         return left.result() - right.result();
//       case "x":
//         return left.result() * right.result();
//       case "÷":
//         return left.result() / right.result();
//       default:
//         return value;
//     }
//   };

//   const toString = function () {
//     if (this.operator) {
//         return `(${this.left.toString()} ${this.operator} ${this.right.toString()})`;
//       }
//       return this.value.toString();
//   };

//   return {
//     operator,
//     value,
//     left,
//     right,
//     result,
//     toString
//   };
// };

const tree = Node(
  "÷",
  null,
  Node(
    "+",
    null,
    Node("", 7, null, null),
    Node(
      "x",
      null,
      Node("-", null, Node("", 3, null, null), Node("", 2, null, null)),
      Node("", 5, null, null)
    )
  ),
  Node("", 6, null, null)
);