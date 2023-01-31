function solve(arr, firstInd, secondInd){
    if (!Array(arr)){
        return NaN;
    }

    if (firstInd < 0){
        firstInd = 0;
    }

    if (secondInd > arr.length - 1){
        secondInd = arr.length - 1;
    }
    
    let totalSum = 0;
    for (let index = firstInd; index <= secondInd; index++) {
        const currentNum = Number(arr[index]);
        totalSum += currentNum;
        
    }
    return totalSum;
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));