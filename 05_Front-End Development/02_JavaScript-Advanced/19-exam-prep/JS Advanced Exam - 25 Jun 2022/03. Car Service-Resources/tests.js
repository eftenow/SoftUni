describe('test carService', ()=>{
    it('tests isItExpensive function', ()=>{
        expect (carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
        expect (carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        expect (carService.isItExpensive('test')).to.equal(`The overall price will be a bit cheaper`);
    })
    
    it('tests discount function', ()=> {
        expect (()=> {carService.discount('a', 10)}).to.throw('Invalid input');
        expect (()=> {carService.discount([], 10)}).to.throw('Invalid input');
        expect (()=> {carService.discount(10, 'a')}).to.throw('Invalid input');
        expect (()=> {carService.discount(10, [])}).to.throw('Invalid input');
        expect (carService.discount(2, 10)).to.equal("You cannot apply a discount");
        expect (carService.discount(1, 10)).to.equal("You cannot apply a discount");
        expect (carService.discount(0, 10)).to.equal("You cannot apply a discount");
        expect (carService.discount(3, 100)).to.equal("Discount applied! You saved 15$");
        expect (carService.discount(7, 100)).to.equal("Discount applied! You saved 15$");
        expect (carService.discount(8, 100)).to.equal("Discount applied! You saved 30$");
    })

    it('tests partsToBuy function', ()=>{
        expect (()=> carService.partsToBuy('a', ['a'])).to.throw('Invalid input');
        expect (()=> carService.partsToBuy(5, ['a'])).to.throw('Invalid input');
        expect (()=> carService.partsToBuy(['a'], 'a')).to.throw('Invalid input');
        expect (()=> carService.partsToBuy(['a'], 5)).to.throw('Invalid input');
        expect (carService.partsToBuy([{'part': 'a', 'price': 5}, {'part': 'b', 'price': 10}, {'part': 'c', 'price': 15} ], ['a', 'b', 'c'])).to.equal(30);
        expect (carService.partsToBuy([{'part': 'a', 'price': 5}, {'part': 'b', 'price': 10} ], ['a', 'b', 'c'])).to.equal(15);
        expect (carService.partsToBuy([{'part': 'a', 'price': 5}], ['a', 'b', 'c'])).to.equal(5);
        expect (carService.partsToBuy([{'part': 'z', 'price': 5}, {'part': 'x', 'price': 10} ], ['a', 'b', 'c'])).to.equal(0);
    })
})