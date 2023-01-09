function mathOperations(first, second, operator){
    let result;
    switch(operator){
        case '+': result = first + second; break;
        case '-': result = first - second; break;
        case '/': result = first / second; break;
        case '*': result = first * second; break;
        case '%': result = first % second; break;
        case '**': result = first ** second; break;
    }
    console.log(result);
}

mathOperations(100, 2, '/')