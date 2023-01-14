function solve(elements){
    let increasingSubset = [];
    let numberOfOperations = elements.length
    let bestNum = Number(elements[0])
    for (let i=0; i < numberOfOperations; i++){
        let currentNum = elements.shift();
        if (currentNum >= bestNum){
            bestNum = currentNum;
            increasingSubset.push(bestNum);
        }
    }
    
    return increasingSubset;
}

solve([20, 
    3, 
    2, 
    15,
    6, 
    1])