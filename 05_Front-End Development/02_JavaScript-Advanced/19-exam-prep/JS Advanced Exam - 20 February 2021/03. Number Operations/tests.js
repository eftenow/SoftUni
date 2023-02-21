const { expect } = require('chai');
const numberOperations = require('./03. Number Operations_Resources');

describe('test', ()=>{
    it('1', ()=>{
        expect (numberOperations.powNumber(5)).to.equal(25);
        expect (numberOperations.powNumber(12)).to.equal(144);
        expect (numberOperations.powNumber(0)).to.equal(0);
    });

    it('2', ()=>{
        expect (()=>numberOperations.numberChecker('a')).to.throw('The input is not a number!');
        expect (()=>numberOperations.numberChecker()).to.throw('The input is not a number!');
        expect (numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
        expect (numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
        expect (numberOperations.numberChecker(-100)).to.equal('The number is lower than 100!');
        expect (numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        expect (numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
    });

    it('3', ()=>{
        expect(numberOperations.sumArrays([1, 2, 3], [1, 2])).to.deep.equal([2, 4, 3]);
        expect(numberOperations.sumArrays([1, 2, 3], [55, 11])).to.deep.equal([56, 13, 3]);
        expect(numberOperations.sumArrays([10, 20, 30], [1, 2])).to.deep.equal([11, 22, 30]);
        expect(numberOperations.sumArrays([10, 20, 30], [1])).to.deep.equal([11, 20, 30]);
        expect(numberOperations.sumArrays([1], [10, 20, 30])).to.deep.equal([11, 20, 30]);
    })
})