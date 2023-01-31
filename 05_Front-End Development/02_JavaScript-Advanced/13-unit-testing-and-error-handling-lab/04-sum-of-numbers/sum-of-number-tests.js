const { assert } = require("chai");
const {sum} = require("./04-sum-of-numbers");

describe("sum", () =>{
    it("should return correct sum of array of numbers", () => {
        let arr = [1, '4', 5];
        let result = sum(arr);
        assert.equal(result, 10);
    });

});