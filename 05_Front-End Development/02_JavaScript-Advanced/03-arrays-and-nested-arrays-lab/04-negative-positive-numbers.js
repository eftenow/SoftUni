function solve(numbersList) {
    let sortedList = [];
    let iterations = numbersList.length;
    for (let i = 0; i < iterations; i++) {
        let currentNumber = numbersList.shift();

        if (currentNumber < 0) {
            sortedList.unshift(currentNumber);
        } else {
            sortedList.push(currentNumber);
        };
    }

    return sortedList.join('\r\n'); 

}