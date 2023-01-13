function solve(numbers){
    let oddIndexElements = numbers.filter((number, index) => index % 2 == 1);
    let revesedElemens = oddIndexElements.reverse();
    let multipliedElements = revesedElemens.map(el => el * 2);
    return multipliedElements;
}