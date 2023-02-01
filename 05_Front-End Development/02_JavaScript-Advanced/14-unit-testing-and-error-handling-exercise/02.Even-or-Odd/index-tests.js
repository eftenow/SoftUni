const { assert } = require("chai");
const isOddOrEven = require("./index");

describe('Testing function issOddOrEven', () =>{
    it('should return undefined if the input type is different than str', ()=>{
        const result = isOddOrEven(2);
        assert.equal(undefined, result);
    });
    it('should return even when the length of the given input is even', ()=>{
        const result = isOddOrEven('abcd');
        assert.equal('even', result);
    });
    it('should return odd when the length of the given input is odd', ()=>{
        const result = isOddOrEven('abc');
        assert.equal('odd', result);
    });
})