const { expect } = require('chai');
const testNumbers = require('./testNumbers');

describe('test', ()=>{
    it('1', ()=>{
        expect(testNumbers.sumNumbers('5', 5)).to.equal(undefined);
        expect(testNumbers.sumNumbers(5, '5')).to.equal(undefined);
        expect(testNumbers.sumNumbers(5, 5)).to.equal('10.00');
        expect(testNumbers.sumNumbers(5.5, 5)).to.equal('10.50');

    });
    it('2', ()=>{
        expect(()=> testNumbers.numberChecker('a')).to.throw('The input is not a number!');
        expect(testNumbers.numberChecker(10)).to.equal('The number is even!');
        expect(testNumbers.numberChecker('10')).to.equal('The number is even!');
        expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
        expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
        expect(testNumbers.numberChecker('0')).to.equal('The number is even!');
        expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
    });
    it('3', ()=>{
        expect(testNumbers.averageSumArray([5, 5])).to.equal(5);
        expect(testNumbers.averageSumArray([5.50, 5])).to.equal(5.25);
        expect(testNumbers.averageSumArray([5])).to.equal(5);
        expect(testNumbers.averageSumArray([10, 20, 30])).to.equal(20);

    });

})