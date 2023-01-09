function numberFromNtoM(first_arg, second_arg){
    let first = Number(first_arg);
    let second = Number(second_arg);
    let result = 0;

    for(let i = first; i <= second; i++) {
        result += i;
    }
   return result
}

console.log(numberFromNtoM(1, 100));