const Node = require('./index');

test("Returns value passed when operator is empty", () => {
    expect(new Node("", 5, null, null).toString()).toBe('5');
});

test("Returns value passed when operator, left and right are passed", () => {
    expect(new Node("-", null, new Node("", 3, null, null), new Node("", 2, null, null)).toString()).toBe('(3 - 2)');
});