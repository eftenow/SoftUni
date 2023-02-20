const { expect } = require('chai');
const findNewApartment = require('./findApartment');

describe('test', ()=>{
    it('1', ()=>{
        expect(()=>findNewApartment.isGoodLocation(1, true)).to.throw('Invalid input!');
        expect(()=>findNewApartment.isGoodLocation('a', 'a')).to.throw('Invalid input!');
        expect(()=>findNewApartment.isGoodLocation('a', 1)).to.throw('Invalid input!');
        expect(findNewApartment.isGoodLocation('plovdiv', true)).to.equal("This location is not suitable for you.");
        expect(findNewApartment.isGoodLocation('sofia', true)).to.equal("This location is not suitable for you.");
        expect(findNewApartment.isGoodLocation('varna', true)).to.equal("This location is not suitable for you.");
        expect(findNewApartment.isGoodLocation('Varna', true)).to.equal("You can go on home tour!");
        expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal("You can go on home tour!");
        expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal("You can go on home tour!");
        expect(findNewApartment.isGoodLocation('Varna', false)).to.equal("There is no public transport in area.");
        expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal("There is no public transport in area.");
        expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal("There is no public transport in area.");

    });
    it('2', ()=>{
        expect (()=>findNewApartment.isLargeEnough('a', 1)).to.throw('Invalid input!');
        expect (()=>findNewApartment.isLargeEnough(['a'], 'a')).to.throw('Invalid input!');
        expect (()=>findNewApartment.isLargeEnough(['a'], '1')).to.throw('Invalid input!');
        expect (()=>findNewApartment.isLargeEnough([], 1)).to.throw('Invalid input!');
        expect (()=>findNewApartment.isLargeEnough([], 0)).to.throw('Invalid input!');
        expect (findNewApartment.isLargeEnough([10, 20, 30], 10)).to.equal('10, 20, 30');
        expect (findNewApartment.isLargeEnough([10, 20, 30], 20)).to.equal('20, 30');
        expect (findNewApartment.isLargeEnough([10, 20, 30], 30)).to.equal('30');
        expect (findNewApartment.isLargeEnough([10, 20, 30], 31)).to.equal('');
    });

    it('3', ()=>{
        expect (()=>findNewApartment.isItAffordable('a', 1)).to.throw('Invalid input!');
        expect (()=>findNewApartment.isItAffordable(1, 'а')).to.throw('Invalid input!');
        expect (()=>findNewApartment.isItAffordable(1, '1')).to.throw('Invalid input!');
        expect (()=>findNewApartment.isItAffordable('1', 1)).to.throw('Invalid input!');
        expect (()=>findNewApartment.isItAffordable(0, 1)).to.throw('Invalid input!');
        expect (()=>findNewApartment.isItAffordable(-1, 1)).to.throw('Invalid input!');
        expect (()=>findNewApartment.isItAffordable(1, 0)).to.throw('Invalid input!');
        expect (()=>findNewApartment.isItAffordable(1, -1)).to.throw('Invalid input!');
        expect (findNewApartment.isItAffordable(9, 10)).to.equal("You can afford this home!");
        expect (findNewApartment.isItAffordable(10, 10)).to.equal("You can afford this home!");
        expect (findNewApartment.isItAffordable(11, 10)).to.equal("You don't have enough money for this house!");
        
        
    })
})