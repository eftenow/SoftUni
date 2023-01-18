function solve(arr) {
    let result = [];
    let operations =  {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }

    for (const el of arr) {
        if (!isNaN(el)){ // if the element is a number
            result.push(el)
        } 

        else{
            let secondNumber = result.pop()
            let firstNumber = result.pop()
            if (firstNumber == undefined || secondNumber == undefined){
                console.log('Error: not enough operands!');
                return;
            }
            else{
                let operand = el;
                let calculation = operations[operand];
                let calculationResult = calculation(firstNumber, secondNumber);
                result.push(calculationResult)
            }
        }
    }
    if (result.length > 1){
        console.log('Error: too many operands!');
    }
    else{
        console.log(result.join());
    }
}


solve([15,
    '/'])