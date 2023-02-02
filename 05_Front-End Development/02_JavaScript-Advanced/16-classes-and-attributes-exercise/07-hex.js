class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() { return this.value };
    toString() { return '0x' + (this.value.toString(16)).toUpperCase() };
    plus(increaseValue) {
        let result = this.value + Number(increaseValue.valueOf());
        return new Hex(result);
    }
    minus(reduceValue) {
        let result = this.value - Number(reduceValue.valueOf());
        return new Hex(result);
    }
    parse(text) {
        return parseInt(text, 16)
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(5).toString());
console.log(a.minus(b).toString());
console.log(FF.parse('AAA'));