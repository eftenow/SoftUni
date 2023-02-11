const { assert, expect } = require("chai");
const movieTheater = require("./index.js");


describe('test movieTeather functionality', ()=>{
    it('tests ageRestrictions function', ()=>{
        expect(movieTheater.ageRestrictions('G')).to.equal("All ages admitted to watch the movie");
        expect(movieTheater.ageRestrictions('PG')).to.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers");
        expect(movieTheater.ageRestrictions('R')).to.equal("Restricted! Under 17 requires accompanying parent or adult guardian");
        expect(movieTheater.ageRestrictions('NC-17')).to.equal("No one under 17 admitted to watch the movie");
        expect(movieTheater.ageRestrictions('asd')).to.equal("There are no age restrictions for this movie");
        expect(movieTheater.ageRestrictions(5)).to.equal("There are no age restrictions for this movie");
    })
    it('tests moneySpent function', ()=>{
        expect(()=> {movieTheater.moneySpent('a', ['a'], ['a'])}).to.throw('Invalid input');
        expect(()=> {movieTheater.moneySpent('a', [], [])}).to.throw('Invalid input');
        expect(()=> {movieTheater.moneySpent(5, 'a', ['a'])}).to.throw('Invalid input');
        expect(()=> {movieTheater.moneySpent(5, 5, ['a'])}).to.throw('Invalid input');
        expect(()=> {movieTheater.moneySpent(5, ['a'], 'a')}).to.throw('Invalid input');
        expect(()=> {movieTheater.moneySpent(5, ['a'], 5)}).to.throw('Invalid input');
        expect(movieTheater.moneySpent(1, ['Nachos'], ['Soda'])).to.equal(`The total cost for the purchase is 23.50`)
        expect(movieTheater.moneySpent(1, ['Popcorn'], ['Water'])).to.equal(`The total cost for the purchase is 21.00`)
        expect(movieTheater.moneySpent(2, ['Nachos'], ['Soda'])).to.equal(`The total cost for the purchase is 38.50`)
        expect(movieTheater.moneySpent(2, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal(`The total cost for the purchase is 44.50`)
        expect(movieTheater.moneySpent(3, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal(`The total cost for the purchase with applied discount is 47.60`)
        expect(movieTheater.moneySpent(3, [], ['Soda', 'Soda'])).to.equal(`The total cost for the purchase is 50.00`)
        expect(movieTheater.moneySpent(3, [], ['Soda', 'Soda', 'Water'])).to.equal(`The total cost for the purchase with applied discount is 41.20`)
    })
    it('tests reservation function', ()=>{
        expect(()=> movieTheater.reservation('a', 5)).to.throw("Invalid input");
        expect(()=> movieTheater.reservation(5, 5)).to.throw("Invalid input");
        expect(()=> movieTheater.reservation(['a'], 'a')).to.throw("Invalid input");
        expect(()=> movieTheater.reservation(['a'], [])).to.throw("Invalid input");
        expect(movieTheater.reservation([{freeSeats: 5, rowNumber: 1}, {freeSeats: 6, rowNumber: 2}], 2)).to.equal(2);
        expect(movieTheater.reservation([{freeSeats: 5, rowNumber: 1}, {freeSeats: 6, rowNumber: 5}], 6)).to.equal(5);
        expect(movieTheater.reservation([{freeSeats: 1, rowNumber: 2}, {freeSeats: 0, rowNumber: 5}], 1)).to.equal(2);
        expect(movieTheater.reservation([{freeSeats: 5, rowNumber: 1}, {freeSeats: 6, rowNumber: 2}, {freeSeats: 7, rowNumber: 3}], 1)).to.equal(3);
    })
})