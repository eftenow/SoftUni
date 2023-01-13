function solve(n, k){
    let arrLen = Number(n);
    let previousElementsNumber = Number(k);
    let numbersSequence = [1]

    for (let i = 1; i < arrLen; i++){
        let result = 0;
        for (let j = i - previousElementsNumber; j <= i; j++){
            if (j >= 0 && j < numbersSequence.length){
                result += numbersSequence[j];
            }
        }    
        numbersSequence.push(result)
    }
    return numbersSequence;
}
