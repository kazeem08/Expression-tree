const Node = require('./index');

test("Returns 5 passed when value is passed", () => {
    expect(new Node("", 5, null, null).toString()).toBe('5');
});

test("Returns '(3 - 2)' when operator, left and right are passed", () => {
    expect(new Node("-", null, new Node("", 3, null, null), new Node("", 2, null, null)).toString()).toBe('(3 - 2)');
});

test("Returns '(7 + ((3 - 2) x 5)) ÷ 6)' when operator, left and right are passed", () => {
    expect(new Node( "÷", null, new Node( "+", null, new Node("", 7, null, null), new Node("x", null,  new Node("-", null, new Node("", 3, null, null), 
    new Node("", 2, null, null)),  new Node("", 5, null, null) )), new Node("", 6, null, null)).toString()).toBe('((7 + ((3 - 2) x 5)) ÷ 6)');
});


test("Returns 1 passed when operator, left and right are passed", () => {
    expect(new Node("-", null, new Node("", 3, null, null), new Node("", 2, null, null)).operatorHandler()).toBe(1);
});

test("Returns 2 when operator, left and right are passed", () => {
    expect(new Node( "÷", null, new Node( "+", null, new Node("", 7, null, null), new Node("x", null,  new Node("-", null, new Node("", 3, null, null), 
    new Node("", 2, null, null)),  new Node("", 5, null, null) )), new Node("", 6, null, null)).result()).toBe(2);
});

test("Returns 1 when operator is -", () => {
    expect(new Node("-", null, new Node("", 3, null, null), new Node("", 2, null, null)).result()).toBe(1);
});

test("Returns 5 when operator is +", () => {
    expect(new Node("+", null, new Node("", 3, null, null), new Node("", 2, null, null)).result()).toBe(5);
});

test("Returns 6 when operator is x", () => {
    expect(new Node("x", null, new Node("", 3, null, null), new Node("", 2, null, null)).result()).toBe(6);
});

test("Returns 6 when operator is x", () => {
    expect(new Node("÷", null, new Node("", 4, null, null), new Node("", 2, null, null)).result()).toBe(2);
});

test("Returns 6 when value is passed", () => {
    expect(new Node('', 7, null, null).result()).toBe(7);
});