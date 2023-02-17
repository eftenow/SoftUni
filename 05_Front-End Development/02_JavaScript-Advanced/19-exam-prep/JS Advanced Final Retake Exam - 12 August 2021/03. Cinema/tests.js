const { expect } = require('chai');
const cinema = require('./cinema');

describe('test', ()=>{
    it('1', ()=>{
        expect(cinema.showMovies([])).to.equal("There are currently no movies to show.");
        expect(cinema.showMovies(['a', 'b', 'c'])).to.equal("a, b, c");
    });

    it('2', ()=>{
        expect(() => cinema.ticketPrice('premiere')).to.throw('Invalid projection type.')
        expect(() => cinema.ticketPrice('normal')).to.throw('Invalid projection type.')
        expect(() => cinema.ticketPrice('discount')).to.throw('Invalid projection type.')
        expect(cinema.ticketPrice('Premiere')).to.equal(12);
        expect(cinema.ticketPrice('Normal')).to.equal(7.5);
        expect(cinema.ticketPrice('Discount')).to.equal(5.5);
    });

    it('3', ()=> {
        expect(cinema.swapSeatsInHall('a', 1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, 'a')).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(0, 1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, 0)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(-1, 1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, -1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(21, 1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, 21)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, 1)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(20, 1)).to.equal("Successful change of seats in the hall.");
    })
})