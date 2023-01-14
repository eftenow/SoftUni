function solve(elements, step) {
    let newArr = [];
    for (let i = 0; i <= elements.length; i += step) {
        let currentElement = elements[i]
        if (currentElement) {
            newArr.push(elements[i])
        }
    }
    return newArr;
}

console.log(solve(['dsa',
    'asd',
    'test',
    'tset'],
    2
));