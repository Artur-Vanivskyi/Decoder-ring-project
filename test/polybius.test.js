const expect = require('chai').expect
const {polybius} = require("../src/polybius");

describe("polybius", () => {
    it("should encode a message by translating each letter to number pairs", () => {
        const actual = polybius("test")
        const expected = "44513444"
        expect(actual).to.equal(expected)
    });
    it("should translate both 'i' and 'j' to 42", () => {
        const actual = polybius("jest")
        const expected = "42513444"
        expect(actual).to.equal(expected)
    });
    it("should leave spaces as is", () => {
        const actual = polybius("test test")
        const expected = "44513444 44513444"
        expect(actual).to.equal(expected)
    });
    it("should decode a message by translating each pair of numbers into a letter", () => {
        const actual = polybius("44513444", false)
        const expected = "test"
        expect(actual).to.equal(expected)
    });
    it("should translate 42 to both 'i' and 'j'", () => {
        const actual = polybius("42513444", false)
        const expected = "i/jest"
        expect(actual).to.equal(expected)
    });
    it("should leave spaces as is when decoding", () => {
        const actual = polybius("44513444 44513444", false)
        const expected = "test test"
        expect(actual).to.equal(expected)
    });
    it("should return false if the length of all numbers is odd", () => {
        const actual = polybius("445134445", false)
        const expected = false
        expect(actual).to.equal(expected)
    });
})