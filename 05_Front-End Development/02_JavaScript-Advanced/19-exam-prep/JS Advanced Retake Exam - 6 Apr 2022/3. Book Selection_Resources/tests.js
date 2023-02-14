

describe('test book selection', ()=>{
    it('tests isGenreSuitable', ()=>{
        expect (bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        expect (bookSelection.isGenreSuitable('Thriller', 11)).to.equal(`Books with Thriller genre are not suitable for kids at 11 age`);
        expect (bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        expect (bookSelection.isGenreSuitable('Horror', 11)).to.equal(`Books with Horror genre are not suitable for kids at 11 age`);
        expect (bookSelection.isGenreSuitable('Thriller', 13)).to.equal(`Those books are suitable`);
        expect (bookSelection.isGenreSuitable('Horror', 13)).to.equal(`Those books are suitable`);
        expect (bookSelection.isGenreSuitable('Comedy', 11)).to.equal(`Those books are suitable`);
    })
    it('tests isAffordable', ()=>{
        expect (()=>{bookSelection.isItAffordable('a', 5)}).to.throw('Invalid input');
        expect (()=>{bookSelection.isItAffordable(5, 'a')}).to.throw('Invalid input');
        expect (bookSelection.isItAffordable(10, 5)).to.equal("You don't have enough money");
        expect (bookSelection.isItAffordable(5, 5)).to.equal(`Book bought. You have 0$ left`);
        expect (bookSelection.isItAffordable(5, 15)).to.equal(`Book bought. You have 10$ left`);
    })
    it('tests suitableTitles', ()=>{
        expect (()=>{bookSelection.suitableTitles('a', 'a')}).to.throw('Invalid input');
        expect (()=>{bookSelection.suitableTitles(['a'], 5)}).to.throw('Invalid input');
        expect (()=>{bookSelection.suitableTitles(['a'], ['a'])}).to.throw('Invalid input');
        expect (bookSelection.suitableTitles([{title: 'a', genre :'a'}, {title: 'b', genre :'b'}], 'b')).to.deep.equal([ "b" ])
        expect (bookSelection.suitableTitles([{title: 'a', genre :'b'}, {title: 'b', genre :'b'}], 'b')).to.deep.equal([ "a", "b" ])
        expect (bookSelection.suitableTitles([{title: 'a', genre :'c'}, {title: 'b', genre :'b'}], 'g')).to.deep.equal([])

    })
})