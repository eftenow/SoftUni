const { expect } = require('chai');
const flowerShop = require('./flowerShop');

describe('test flowerShop', ()=>{
    it('1', ()=>{
        expect(()=> {flowerShop.calcPriceOfFlowers(1, 1, 1)}).to.throw('Invalid input!');
        expect(()=> {flowerShop.calcPriceOfFlowers('a', 'a', 1)}).to.throw('Invalid input!');
        expect(()=> {flowerShop.calcPriceOfFlowers('a', 1, 'a')}).to.throw('Invalid input!');
        expect(flowerShop.calcPriceOfFlowers('a', 5, 5)).to.equal(`You need $25.00 to buy a!`);
        expect(flowerShop.calcPriceOfFlowers('a', 5, 0)).to.equal(`You need $0.00 to buy a!`);
    });
    it('2', ()=>{
        expect(flowerShop.checkFlowersAvailable('a', [])).to.equal('The a are sold! You need to purchase more!')
        expect(flowerShop.checkFlowersAvailable('a', ['a'])).to.equal(`The a are available!`)
        expect(flowerShop.checkFlowersAvailable('a', ['1', '2'])).to.equal('The a are sold! You need to purchase more!')
        expect(flowerShop.checkFlowersAvailable('z', ['1', '2', 'z'])).to.equal(`The z are available!`)
    });
    it('3', ()=>{
        expect(()=> {flowerShop.sellFlowers('a', 10)}).to.throw('Invalid input!');
        expect(()=> {flowerShop.sellFlowers(5, 10)}).to.throw('Invalid input!');
        expect(()=> {flowerShop.sellFlowers(['a', 'b'], 'a')}).to.throw('Invalid input!');
        expect(()=> {flowerShop.sellFlowers(['a', 'b'], -1)}).to.throw('Invalid input!');
        expect(()=> {flowerShop.sellFlowers(['a', 'b'], 2)}).to.throw('Invalid input!');
        expect(()=> {flowerShop.sellFlowers(['a', 'b'], 3)}).to.throw('Invalid input!');
        expect(flowerShop.sellFlowers(['a', 'b', 'c'], 0)).to.equal('b / c')
        expect(flowerShop.sellFlowers(['a', 'b', 'c'], 1)).to.equal('a / c')
        expect(flowerShop.sellFlowers(['a', 'b', 'c'], 2)).to.equal('a / b')
    })

})