function solve(names){
    const sortedNames = names.sort(function (a, b){
        return a.toLowerCase().localeCompare(b.toLowerCase());
    })
    names.forEach((elemment, index) => console.log(`${index + 1}.${elemment}`));
}


solve(["John", "Bob", "Christina", "Ema"])