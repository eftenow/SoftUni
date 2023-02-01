const { assert } = require("chai");
const lookupChar = require("./index");

describe('Test lookupChar functionality', ()=>{
    it('Should not accept anything different than String for first param', ()=> {
        const firstParam1 = 1;
        const firstParam2 = [];
        const firstParam3 = 1.6;
        const firstParam4 = {};
        const secondParam = 5;

        assert.isUndefined(lookupChar(firstParam1, secondParam));
        assert.isUndefined(lookupChar(firstParam2, secondParam));
        assert.isUndefined(lookupChar(firstParam3, secondParam));
        assert.isUndefined(lookupChar(firstParam4, secondParam));
    });

    it('Should not accept anything different than Integer for second param', ()=> {
        const secondParam1 = 'hallo';
        const secondParam2 = [];
        const secondParam3 = () => '';
        const secondParam4 = {};
        const secondParam5 = 5.5;
        const firstParam = 'random text';

        assert.isUndefined(lookupChar(firstParam, secondParam1));
        assert.isUndefined(lookupChar(firstParam, secondParam2));
        assert.isUndefined(lookupChar(firstParam, secondParam3));
        assert.isUndefined(lookupChar(firstParam, secondParam4));
        assert.isUndefined(lookupChar(firstParam, secondParam5));
    });
    it('should return incorrect index msg if the index is out of range', ()=>{
        let result1 = lookupChar('abcd', 4);
        let result2 = lookupChar('abcd', -1);
        assert.equal('Incorrect index', result1);
        assert.equal('Incorrect index', result2);
    });
    it('should return character at the specified index if the input data is valid', ()=>{
        let result1 = lookupChar('abcd', 0);
        let result2 = lookupChar('abcd', 3);
        assert.equal('a', result1);
        assert.equal('d', result2);
    })
})