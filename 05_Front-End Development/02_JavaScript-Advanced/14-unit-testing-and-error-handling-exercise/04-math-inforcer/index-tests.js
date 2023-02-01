const { assert } = require('chai');
const mathEnforcer = require('./index');

describe('Test all the inner functions in mathEnforcer', () => {
    describe('Test inner function addFive', ()=>{
        it('should return undefined if the passed parameter is not a number', () => {
            let result1 = mathEnforcer.addFive('abc');
            let result2 = mathEnforcer.addFive({ 'A': 'a' });
            let result3 = mathEnforcer.addFive(['a', 'b']);
            let result4 = mathEnforcer.addFive('');
    
            assert.isUndefined(result1);
            assert.isUndefined(result2);
            assert.isUndefined(result3);
            assert.isUndefined(result4);
        });
    
        it('should return the input number increased by 5', () => {
            let result1 = mathEnforcer.addFive(-5);
            let result2 = mathEnforcer.addFive(5);
            let result3 = mathEnforcer.addFive(10.5);
            assert.equal(result1, 0);
            assert.equal(result2, 10);
            assert.equal(result3, 15.5);
        });
    })

    describe('Test inner function subtractTen', ()=>{
        it('should return the input number decreased by 10', () => {
            let result1 = mathEnforcer.subtractTen(100);
            let result2 = mathEnforcer.subtractTen(5);
            let result3 = mathEnforcer.subtractTen(-5);
            let result4 = mathEnforcer.subtractTen(10.5);
            assert.equal(result1, 90);
            assert.equal(result2, -5);
            assert.equal(result3, -15);
            assert.equal(result4, 0.5);
        });
    
        it('should return undefined if the passed parameter is not a number', () => {
            let result1 = mathEnforcer.subtractTen('abc');
            let result2 = mathEnforcer.subtractTen({ 'A': 'a' });
            let result3 = mathEnforcer.subtractTen(['a', 'b']);
            let result4 = mathEnforcer.subtractTen('');
            assert.isUndefined(result1);
            assert.isUndefined(result2);
            assert.isUndefined(result3);
            assert.isUndefined(result4);
    
        });
    })

    describe('Test inner function sum', ()=>{
        it('should return the sum of the 2 input numbers', () => {
            let result1 = mathEnforcer.sum(100, 50);
            let result2 = mathEnforcer.sum(-15, 15);
            let result3 = mathEnforcer.sum(30, -60);
            let result4 = mathEnforcer.sum(30.5, 20.3);
            assert.equal(result1, 150);
            assert.equal(result2, 0);
            assert.equal(result3, -30);
            assert.equal(result4, 50.8);
        });
    
        it('should return undefined if any of the passed parameters is not a number', ()=>{
            let result1 =  mathEnforcer.sum('abc', 1);
            let result2 =  mathEnforcer.sum({'A': 'a'}, 1);
            let result3 =  mathEnforcer.sum(['a', 'b'], 1);
            let result4 =  mathEnforcer.sum('', 1);
            let result5 =  mathEnforcer.sum(1, 'abc');
            let result6 =  mathEnforcer.sum(1, {'A': 'a'});
            let result7 =  mathEnforcer.sum(1, ['a', 'b']);
            let result8 =  mathEnforcer.sum(1, '');
    
            assert.isUndefined(result1);
            assert.isUndefined(result2);
            assert.isUndefined(result3);
            assert.isUndefined(result4);
            assert.isUndefined(result5);
            assert.isUndefined(result6);
            assert.isUndefined(result7);
            assert.isUndefined(result8);
        });
    })
    })