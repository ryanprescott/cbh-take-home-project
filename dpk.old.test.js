const { deterministicPartitionKey } = require("./dpk.old");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKeyOld", () => {
  it("Returns 'test' when given {partitionKey: 'test'}", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "test"});
    expect(trivialKey).toBe("test");
  });
});

describe("deterministicPartitionKeyOld", () => {
  it("Returns '2' when given {partitionKey: 2}", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 2});
    expect(trivialKey).toBe("2");
  });
});

describe("deterministicPartitionKeyOld", () => {
  it("Returns a specific hash when given {foo: 'bar'}", () => {
    const trivialKey = deterministicPartitionKey({foo: 'bar'});
    expect(trivialKey).toBe("a419a15de4a65c3dba49c38b4485cd4dce1dde4d18f5b965d90f0649bef54252ec4e76dbcaa603708e8e8ebbe848ba484e81e23b7823808b5b8e5f4222d122e8");
  });
});

describe("deterministicPartitionKeyOld", () => {
  it("Returns a hash when given a long key", () => {
    const trivialKey = deterministicPartitionKey('a'.repeat(257));
    expect(trivialKey).toBe("479643535a0ef89ad4820ca41f5ec675e9c9383178f4ddb6bdb0a52435818cc5f37fbb785bbbca837be975e51736de2a5d3f8111577185d84ed2ace89a702693");
  });
});