function solve(arr) {
    let elements = arr;
    let evenIndexElements = [];
    for (i = 0; i <= elements.length; i++) {
        let currentElement = elements[i]
        if (i % 2 == 0) {
            evenIndexElements.push(currentElement)
        }
    }
    console.log(evenIndexElements.join(' '));

}
