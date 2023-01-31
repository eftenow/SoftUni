const { assert } = require("chai");
const {isSymmetric} =  require("./check-for-symetry");

describe ('Symetric Array', () =>{
    it('should return false if the given input is a string', () =>{
        let result = isSymmetric('someString');
        assert.equal(false, result)
    });
    it('should return flase if the given input is not an arr', ()=> {
        let result = isSymmetric(1, 2, 3, 2, 1);
        assert.equal(result, false);
    });
    it('should return true if arr has only 1 element', ()=> {
        let result = isSymmetric([5]);
        assert.equal(result, true);
    });
    it('should return true if the given array is symmetric', () =>{
        let result = isSymmetric([1, 2, 3, 2, 1]);
        assert.equal(true, result);
    });
    it('should return false if elemnts in array are different type', () =>{
        let result = isSymmetric([1, 2, 3, 4, '3', '2', '1']);
        assert.equal(false, result);
    });
    it('should return false if the array is not symmetric', ()=>{
        let result = isSymmetric([1, 2, 3, 4]);
        assert.equal(false, result)
    });
    


})