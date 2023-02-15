const { expect } = require('chai');
const rentCar = require('./rentCar');



describe('test', ()=>{
    it('should..', ()=>{
        expect(()=> rentCar.searchCar('asd', 'asd')).to.throw('Invalid input!')
        expect(()=> rentCar.searchCar(5, 'asd')).to.throw('Invalid input!')
        expect(()=> rentCar.searchCar(['asd'], 5)).to.throw('Invalid input!')
        expect(()=> rentCar.searchCar(['asd'], ['asd'])).to.throw('Invalid input!')
        expect(rentCar.searchCar(['a', 'b'], 'a')).to.equal('There is 1 car of model a in the catalog!')
        expect(rentCar.searchCar(['a', 'b', 'a', 'a'], 'a')).to.equal('There is 3 car of model a in the catalog!')
        expect(()=> rentCar.searchCar(['a', 'b', 'a', 'a'], 'c')).to.throw('There are no such models in the catalog!')
    })
    it('should2..', ()=>{
        expect(()=> rentCar.calculatePriceOfCar(9, 9)).to.throw('Invalid input!')
        expect(()=> rentCar.calculatePriceOfCar('asd', 'asd')).to.throw('Invalid input!')
        expect(()=> rentCar.calculatePriceOfCar('asd', 5)).to.throw("No such model in the catalog!")
        expect(rentCar.calculatePriceOfCar('Audi', 5)).to.equal("You choose Audi and it will cost $180!")
        expect(rentCar.calculatePriceOfCar('BMW', 10)).to.equal("You choose BMW and it will cost $450!")

    })
    it('should.....', ()=>{
        expect(()=> rentCar.checkBudget('asd', 9, 9)).to.throw('Invalid input!');
        expect(()=> rentCar.checkBudget(['asd'], 9, 9)).to.throw('Invalid input!');
        expect(()=> rentCar.checkBudget(9, 'a', 9)).to.throw('Invalid input!');
        expect(()=> rentCar.checkBudget(9, ['a'], 9)).to.throw('Invalid input!');
        expect(()=> rentCar.checkBudget(9, 5, 'a')).to.throw('Invalid input!');
        expect(()=> rentCar.checkBudget(9, 5, ['a'])).to.throw('Invalid input!');
        expect(rentCar.checkBudget(9, 5, 9)).to.equal('You need a bigger budget!');
        expect(rentCar.checkBudget(9, 5, 500)).to.equal('You rent a car!');
        expect(rentCar.checkBudget(10, 10, 100)).to.equal('You rent a car!');
        

    })
})