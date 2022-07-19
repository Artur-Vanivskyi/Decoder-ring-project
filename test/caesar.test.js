const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("caesar" ,() =>{
    it("should return false if the shift value is not present", () =>{
        const actual = caesar("sample");
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if the shift amount is 0", () =>{
        const actual = caesar("sample" , 0);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if the shift amount is above 25", () =>{
        const actual = caesar("sample" , 30);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if the shift amount is less than -25", () =>{
        const actual = caesar("sample" , -30);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("encode = true: should maintain all non-alphabetic characters, such as spaces and symbols", () => {
        const actual = caesar('sample text!!', 12);
        const expected = "emybxq fqjf!!";
        expect(actual).to.equal(expected);
    });
    it("encode = false: should maintain all non-alphabetic characters, such as spaces and symbols", () =>{
        const actual = caesar('emybxq fqjf!!', 12, false);
        const expected = "sample text!!";
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () =>{
        const actual = caesar('SAMPLE TEXT', 5);
        const expected = "xfruqj yjcy";
        expect(actual).to.equal(expected);
    });
     
})