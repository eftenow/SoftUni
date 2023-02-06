const { assert, expect } = require("chai");
const motorcycleRider = require("./Motorcycle Rider");


describe('test licenseRestriction function', () => {
    it('should return correct message according to the category input text', () => {
        expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
        expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
        expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.')
        expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.')

    })
    it('shoud throw error if the category input is not valid', () => {
        expect(() => { motorcycleRider.licenseRestriction('G')}).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.licenseRestriction('7') }).to.throw('Invalid Information!');

    })
})
describe('test motorcycleShowroom function', () => {
    it('should throw error if any of the given inputs is of invalid type', () => {
        expect(() => { motorcycleRider.motorcycleShowroom(5, 100) }).to.throw('Invalid Information');
        expect(() => { motorcycleRider.motorcycleShowroom('50', 100) }).to.throw('Invalid Information');
        expect(() => { motorcycleRider.motorcycleShowroom([200, 300], '50') }).to.throw('Invalid Information');
        expect(() => { motorcycleRider.motorcycleShowroom([200, 300], 'abc') }).to.throw('Invalid Information');
        expect(() => { motorcycleRider.motorcycleShowroom([], 200) }).to.throw('Invalid Information');
        expect(() => { motorcycleRider.motorcycleShowroom([100, 200, 300], 49) }).to.throw('Invalid Information');
        expect(() => { motorcycleRider.motorcycleShowroom([100, 200, 300], -1) }).to.throw('Invalid Information');
        expect( motorcycleRider.motorcycleShowroom([100, 200, 300], 300)).to.equal("There are 3 available motorcycles matching your criteria!");
        expect( motorcycleRider.motorcycleShowroom(['100', '200', 300], 300)).to.equal("There are 3 available motorcycles matching your criteria!");
        expect( motorcycleRider.motorcycleShowroom(['100', '200', 300, 'a', 350], 400)).to.equal("There are 4 available motorcycles matching your criteria!");
        expect( motorcycleRider.motorcycleShowroom([100, 200, 300], 299)).to.equal("There are 2 available motorcycles matching your criteria!");
        expect( motorcycleRider.motorcycleShowroom([100, 200, 300], 199)).to.equal("There are 1 available motorcycles matching your criteria!");
        expect( motorcycleRider.motorcycleShowroom([100, 200, 300], 99)).to.equal("There are 0 available motorcycles matching your criteria!");
        expect( motorcycleRider.motorcycleShowroom([10, 20, 30], 50)).to.equal("There are 0 available motorcycles matching your criteria!");
        expect( motorcycleRider.motorcycleShowroom([0], 50)).to.equal("There are 0 available motorcycles matching your criteria!");
    })  
})

describe('test otherSpendings function', ()=>{
    it('should throw an error if any of the 3 input fields is incorrect', ()=>{
        expect(() => { motorcycleRider.otherSpendings(5, ['asd'], true) }).to.throw('Invalid Information');
        expect(() => { motorcycleRider.otherSpendings('asd', ['asd'], true) }).to.throw('Invalid Information');
        expect(() => { motorcycleRider.otherSpendings(['asd'], 'asd', true) }).to.throw('Invalid Information');
        expect(() => { motorcycleRider.otherSpendings(['asd'], 5, true) }).to.throw('Invalid Information');
        expect(() => { motorcycleRider.otherSpendings(['asd'], true, false) }).to.throw('Invalid Information');
        expect(() => { motorcycleRider.otherSpendings(['asd'], ['asd'], ['asd']) }).to.throw('Invalid Information');
        expect(() => { motorcycleRider.otherSpendings(['asd'], ['asd'], 'asd') }).to.throw('Invalid Information');
        expect(() => { motorcycleRider.otherSpendings(['asd'], ['asd'], 5) }).to.throw('Invalid Information');
        expect( motorcycleRider.otherSpendings(['helmet', 'jacked'], [], true)).to.equal(`You spend $450.00 for equipment and consumables with 10% discount!`);
        expect( motorcycleRider.otherSpendings(['helmet'], [], true)).to.equal(`You spend $180.00 for equipment and consumables with 10% discount!`);
        expect( motorcycleRider.otherSpendings(['jacked'], [], true)).to.equal(`You spend $270.00 for equipment and consumables with 10% discount!`);
        expect( motorcycleRider.otherSpendings([], ["engine oil", "oil filter"], true)).to.equal(`You spend $90.00 for equipment and consumables with 10% discount!`);
        expect( motorcycleRider.otherSpendings([], ["engine oil"], true)).to.equal(`You spend $63.00 for equipment and consumables with 10% discount!`);
        expect( motorcycleRider.otherSpendings([], ["oil filter"], true)).to.equal(`You spend $27.00 for equipment and consumables with 10% discount!`);
        expect( motorcycleRider.otherSpendings(['helmet', 'jacked', 'helmet'], ["engine oil", "oil filter", "engine oil"], true)).to.equal(`You spend $783.00 for equipment and consumables with 10% discount!`);
        
        expect( motorcycleRider.otherSpendings(['helmet', 'jacked'], [], false)).to.equal(`You spend $500.00 for equipment and consumables!`);
        expect( motorcycleRider.otherSpendings(['helmet'], [], false)).to.equal(`You spend $200.00 for equipment and consumables!`);
        expect( motorcycleRider.otherSpendings(['jacked'], [], false)).to.equal(`You spend $300.00 for equipment and consumables!`);
        expect( motorcycleRider.otherSpendings([], ["engine oil", "oil filter"], false)).to.equal(`You spend $100.00 for equipment and consumables!`);
        expect( motorcycleRider.otherSpendings([], ["engine oil"], false)).to.equal(`You spend $70.00 for equipment and consumables!`);
        expect( motorcycleRider.otherSpendings([], ["oil filter"], false)).to.equal(`You spend $30.00 for equipment and consumables!`);
        expect( motorcycleRider.otherSpendings(['helmet', 'jacked', 'helmet'], ["engine oil", "oil filter", "engine oil"], false)).to.equal(`You spend $870.00 for equipment and consumables!`);
        
    })
})