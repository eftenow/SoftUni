const { expect } = require("chai");
const companyAdministration = require(`./companyAdministration`);


describe('test', ()=>{
    it('1', ()=>{
        expect(()=>{companyAdministration.hiringEmployee('a', 'qa specialist', 5)}).to.throw(`We are not looking for workers for this position.`);
        expect(()=>{companyAdministration.hiringEmployee('a', 'programmer', 5)}).to.throw(`We are not looking for workers for this position.`);
        expect(companyAdministration.hiringEmployee('a', 'Programmer', 5)).to.equal(`a was successfully hired for the position Programmer.`);
        expect(companyAdministration.hiringEmployee('a', 'Programmer', 3)).to.equal(`a was successfully hired for the position Programmer.`);
        expect(companyAdministration.hiringEmployee('a', 'Programmer', 2)).to.equal(`a is not approved for this position.`);
    });
    it('2', ()=>{
        expect(()=>{companyAdministration.calculateSalary('a')}).to.throw('Invalid hours');
        expect(()=>{companyAdministration.calculateSalary(-1)}).to.throw('Invalid hours');
        expect(companyAdministration.calculateSalary(0)).to.equal(0);
        expect(companyAdministration.calculateSalary(10)).to.equal(150);
        expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        expect(companyAdministration.calculateSalary(161)).to.equal(3415);
    })
    it('3', ()=>{
        expect(()=>{companyAdministration.firedEmployee('a', 1)}).to.throw('Invalid input');
        expect(()=>{companyAdministration.firedEmployee(5, 1)}).to.throw('Invalid input');
        expect(()=>{companyAdministration.firedEmployee(['a'], 'a')}).to.throw('Invalid input');
        expect(()=>{companyAdministration.firedEmployee(['a', 'b'], -1)}).to.throw('Invalid input');
        expect(()=>{companyAdministration.firedEmployee(['a', 'b'], 2)}).to.throw('Invalid input');
        expect(()=>{companyAdministration.firedEmployee(['a', 'b'], 3)}).to.throw('Invalid input');
        expect(()=>{companyAdministration.firedEmployee(['a', 'b'], 3)}).to.throw('Invalid input');
        expect(companyAdministration.firedEmployee(['a', 'b', 'c'], 2)).to.equal('a, b');
        expect(companyAdministration.firedEmployee(['a', 'b', 'c'], 1)).to.equal('a, c');
        expect(companyAdministration.firedEmployee(['a', 'b', 'c'], 0)).to.equal('b, c');
    })
})