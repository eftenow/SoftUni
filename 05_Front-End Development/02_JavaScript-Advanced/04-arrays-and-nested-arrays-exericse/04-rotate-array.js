function solve(elements, rotations){
    for (r=0; r < rotations; r++){
        let lastElement = elements.pop();
        elements.unshift(lastElement);
    };
    console.log(elements.join(' '));
}


solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)

