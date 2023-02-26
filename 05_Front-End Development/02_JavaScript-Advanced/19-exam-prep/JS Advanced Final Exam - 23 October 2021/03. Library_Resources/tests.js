const { expect } = require('chai');
const { describe } = require('mocha');
const library = require('./library');



describe('test', ()=>{
    it('1', ()=>{
        expect(()=> {library.calcPriceOfBook(1, 'a')}).to.throw('Invalid input');
        expect(()=> {library.calcPriceOfBook('a', 'a')}).to.throw('Invalid input');
        expect(library.calcPriceOfBook('a', 1979)).to.equal('Price of a is 10.00');
        expect(library.calcPriceOfBook('a', 1980)).to.equal('Price of a is 10.00');
        expect(library.calcPriceOfBook('a', 1981)).to.equal('Price of a is 20.00');
    });
    it('2', ()=>{
        expect(()=> {library.findBook([], 'a')}).to.throw("No books currently available");
        expect(library.findBook(['a', 'b', 'c'], 'a')).to.equal('We found the book you want.');
        expect(library.findBook(['a', 'b', 'c'], 'd')).to.equal("The book you are looking for is not here!");
    });
    it('3', ()=>{
        expect(()=>{library.arrangeTheBooks('a')}).to.throw('Invalid input');
        expect(()=>{library.arrangeTheBooks([1])}).to.throw('Invalid input');
        expect(()=>{library.arrangeTheBooks(-1)}).to.throw('Invalid input');
        expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged.");
        expect(library.arrangeTheBooks(1)).to.equal("Great job, the books are arranged.");
        expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.");
        expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
    })

})

