function sameNumbers(number){
    let strNumber = String(number)
    let totalSum = 0;
    let length = strNumber.length - 1
    let isSame = true;
    for (i=0; i < length; i++){
        totalSum += Number(strNumber[i])
        if (i+1 == length){
            totalSum += Number(strNumber[i+1])
        }
        if (strNumber[i] !== strNumber[i+1]){
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(totalSum);
    
    
}