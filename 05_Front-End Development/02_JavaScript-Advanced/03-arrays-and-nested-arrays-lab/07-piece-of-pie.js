function solve(pies, targetOne, targetTwo){
    let startingIndex = pies.indexOf(targetOne);
    let endIndex = pies.indexOf(targetTwo);
    let newArr = pies.slice(startingIndex, endIndex + 1);
    return newArr;
}