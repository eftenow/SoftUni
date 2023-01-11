function aggregateElemets(elements){
    let numberOfElements = elements.length - 1
    let sum = 0;
    let inverseSum = 0;
    let concat = '';
    for (let i = 0; i <= numberOfElements; i++){
        sum += elements[i]
        inverseSum += 1 / elements[i]
        concat += String(elements[i])
    }
    console.log(`${sum}\n${inverseSum}\n${concat}`);
}

aggregateElemets([1, 2, 3])