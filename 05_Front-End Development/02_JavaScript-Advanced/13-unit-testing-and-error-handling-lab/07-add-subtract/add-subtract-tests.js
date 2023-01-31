const { assert } = require("chai");
const {createCalculator} = require("./add-subtract");

describe('Test add-subtract calculator', ()=>{
    it('should return object add functionality', ()=>{
        assert.equal(createCalculator().hasOwnProperty('add'), true);
    });
    it('should return object subtract functionality', ()=>{
        assert.equal(createCalculator().hasOwnProperty('subtract'), true);
    });
    it('should return object get functionality', ()=>{
        assert.equal(createCalculator().hasOwnProperty('get'), true);
    });
    it('should have an internal value which has to be unreachable from the outside', ()=>{
        assert.equal(createCalculator().hasOwnProperty('value'), false);

        
    });
    it('Should parse operand of the add function as number', () => {
        const calculator = createCalculator();

        calculator.add(2);
        calculator.add('5');

        assert.equal(calculator.get(), 7);
    });

    it('Should parse operand of the subtract function as number', () => {
        const calculator = createCalculator();

        calculator.add('5');
        calculator.subtract(2);
        calculator.subtract('1');

        assert.equal(calculator.get(), 2);
    });

})