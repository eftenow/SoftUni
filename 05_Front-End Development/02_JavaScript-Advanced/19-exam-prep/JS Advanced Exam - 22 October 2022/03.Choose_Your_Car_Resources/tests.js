const { assert, expect } = require("chai");
const chooseYourCar = require("./chooseYourCar");

describe('test chooseYourCar', ()=>{
    it('tests choosingType function', ()=>{
        expect(() => {chooseYourCar.choosingType('Sedan', 'white', 1899)}).to.throw(`Invalid Year!`);
        expect(() => {chooseYourCar.choosingType('Sedan', 'white', 2023)}).to.throw(`Invalid Year!`);
        expect(() => {chooseYourCar.choosingType('sedan', 'white', 2015)}).to.throw(`This type of car is not what you are looking for.`);
        expect(chooseYourCar.choosingType('Sedan', 'white', 2022)).to.equal(`This white Sedan meets the requirements, that you have.`)
        expect(chooseYourCar.choosingType('Sedan', 'white', 2010)).to.equal(`This white Sedan meets the requirements, that you have.`)
        expect(chooseYourCar.choosingType('Sedan', 'white', 2015)).to.equal(`This white Sedan meets the requirements, that you have.`)
        expect(chooseYourCar.choosingType('Sedan', 'white', 2009)).to.equal( `This Sedan is too old for you, especially with that white color.`)
    })
    it('tests brandName function', ()=>{
        expect(()=> {chooseYourCar.brandName('t', 1)}).to.throw('Invalid Information!');
        expect(()=> {chooseYourCar.brandName(5, 1)}).to.throw('Invalid Information!');
        expect(()=> {chooseYourCar.brandName(['t1', 't2'], 'a')}).to.throw('Invalid Information!');
        expect(()=> {chooseYourCar.brandName(['t1', 't2'], 2)}).to.throw('Invalid Information!');
        expect(()=> {chooseYourCar.brandName(['t1', 't2'], -1)}).to.throw('Invalid Information!');
        expect(chooseYourCar.brandName(['a', 'b', 'c'], 2)).to.equal('a, b')
        expect(chooseYourCar.brandName(['a', 'b', 'c'], 1)).to.equal('a, c')
        expect(chooseYourCar.brandName(['a', 'b', 'c'], 0)).to.equal('b, c')
    })
    it('tests carFuelConsumption function', ()=>{
        expect(()=> {chooseYourCar.carFuelConsumption('a', 5)}).to.throw('Invalid Information!');
        expect(()=> {chooseYourCar.carFuelConsumption(5, 'a')}).to.throw('Invalid Information!');
        expect(()=> {chooseYourCar.carFuelConsumption(0, 5)}).to.throw('Invalid Information!');
        expect(()=> {chooseYourCar.carFuelConsumption(5, 0)}).to.throw('Invalid Information!');
        expect(()=> {chooseYourCar.carFuelConsumption(-1, 5)}).to.throw('Invalid Information!');
        expect(()=> {chooseYourCar.carFuelConsumption(5, -1)}).to.throw('Invalid Information!');
        expect(()=> {chooseYourCar.carFuelConsumption(5, -1)}).to.throw('Invalid Information!');
        expect(chooseYourCar.carFuelConsumption(3, 1)).to.equal('The car burns too much fuel - 33.33 liters!');
        expect(chooseYourCar.carFuelConsumption(10, 0.71)).to.equal('The car burns too much fuel - 7.10 liters!');
        expect(chooseYourCar.carFuelConsumption(30, 1)).to.equal('The car is efficient enough, it burns 3.33 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(10, 0.7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');

    })
})
