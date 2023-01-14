function solve(numbers){
    let sortedNumbers = numbers.sort(function(a, b){
        return a-b;
    });
    
    for (let i = 1; i < sortedNumbers.length; i +=2){
        let targetIndex = i;
        let nextBiggestNum = sortedNumbers.pop();
        sortedNumbers.splice(targetIndex, 0, nextBiggestNum);
    }
    return sortedNumbers;
}



console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));