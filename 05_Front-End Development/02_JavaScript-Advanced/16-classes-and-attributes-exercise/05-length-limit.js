class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase = (value) =>{
        this.innerLength += value;
    }
    decrease = (value) =>{
        this.innerLength =  this.innerLength - value > 0 ? this.innerLength - value : 0;
    }

    toString = () =>{
        if (this.innerString.length > this.innerLength){
            let lettersToRemove = this.innerString.length - this.innerLength;
            let modifiedString = this.innerString.slice(0, this.innerLength) + '...';
            return modifiedString;
        }
        return this.innerString;
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
