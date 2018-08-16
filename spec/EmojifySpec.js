// describe() - group up a series of tests
// it() - an individual test case
// expect() - checks the result of the test

describe("emojify function", function () {
  it("replaces 'pizza' with '🍕'", function () {
    var result = emojify("I like pizza!");
    expect(result).toEqual("I like 🍕!");
  });

  it("replaces 'taco' with '🌮'", function () {
    var result = emojify("Two tacos please.");
    expect(result).toEqual("Two 🌮 please.");
  });

  it("ignores case", function () {
    var result = emojify("I like PIZZA!");
    expect(result).toEqual("I like 🍕!");
  });

  it("replaces more than 1 word", function () {
    var result = emojify("I like pizza. Pizza is my favorite food.");
    expect(result).toEqual("I like 🍕. 🍕 is my favorite food.");
  });

  it("works for plural", function () {
    var result = emojify("Pizzas are here!");
    expect(result).toEqual("🍕 are here!");
  });
});
