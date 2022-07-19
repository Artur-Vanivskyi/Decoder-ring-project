const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should return false if the substitution alphabet is missing", () => {
    const actual = substitution("test");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    const alphabet = "xoyq";
    const actual = substitution("test", alphabet);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if the substitution alphabet does not contain unique characters", () => {
    const alphabet = "xoyqmc";
    const actual = substitution("test", alphabet);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("should encode a message by using the given substitution alphabet", () =>{
    const actual = substitution("test", "qawsezdrxftcgyvhubjinkomlp");
    const expected = "ieji";
    expect(actual).to.equal(expected);
  });
  it("should work with any kind of key with unique characters", () =>{
    const actual = substitution("test", "qawsezdrxftcgyvhubj!nkomlp");
    const expected = "!ej!";
    expect(actual).to.equal(expected);
  });
  it("should preserve spaces", () =>{
    const actual = substitution("test", "qawsezdrxftcgyvhub inkomlp");
    const expected = "ie i";
    expect(actual).to.equal(expected);
  });
  it("should decode a message by using the given substitution alphabet", () =>{
    const actual = substitution("ieji", "qawsezdrxftcgyvhubjinkomlp", false);
    const expected = "test";
    expect(actual).to.equal(expected);
  });
});
