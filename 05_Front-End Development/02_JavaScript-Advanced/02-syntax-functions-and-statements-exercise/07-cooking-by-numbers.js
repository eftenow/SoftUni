function cookingByNumbers(...arguments){
    let number = parseInt(arguments[0]);
    numberOfOperations = arguments.length - 1;
    for (i=1; i <= numberOfOperations; i++){
        let currentOperation = arguments[i]
        if (currentOperation == 'chop'){
            number /= 2;
        }else if (currentOperation == 'dice'){
            number = Math.sqrt(number);
        }else if (currentOperation == 'spice'){
            number += 1;
        }else if (currentOperation == 'bake'){
            number *= 3;
        }else if (currentOperation == 'fillet'){
            number -= (0.20 * number)
        }
        console.log(number);
    }
}