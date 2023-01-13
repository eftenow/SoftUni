function solve(numbersList){
    let sortedNumbers = numbersList.sort(function(a, b){
        return a-b;
    });
    let elemntsToReturn = Math.round(sortedNumbers.length / 2);
    let result = sortedNumbers.slice(-elemntsToReturn)
    return result;
}