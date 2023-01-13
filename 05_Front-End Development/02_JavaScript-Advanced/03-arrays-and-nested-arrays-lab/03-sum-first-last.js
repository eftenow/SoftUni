function solve(numbersList) {
    let firstElement = numbersList.shift();
    let secondElement = numbersList.pop() || 0;
    sumFirstLast = Number(firstElement) + Number(secondElement);

    return sumFirstLast;
}
