function solve(...elements) {
    let elementsObj = {};
    let elementTypes = {};

    elements.forEach(el => {
        let elType = typeof(el);
        console.log(`${elType}: ${el}`);
        elementTypes.hasOwnProperty(elType) ? elementTypes[elType] += 1 : elementTypes[elType] = 1;
    });
    Object.entries(elementTypes)
    .sort((a, b) => b[1] - a[1])
    .map(kvp => console.log(`${kvp[0]} = ${kvp[1]}`));
        
}

solve('cat', 42, function () { console.log('Hello world!'); }, )



// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1