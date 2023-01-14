function solve(operations) {
    let number = 1;
    let numbersArr = [];
    for (const operation of operations) {
        if (operation == 'remove') {
            numbersArr.pop();
        } else if (operation == 'add') {
            numbersArr.push(number);
        }
        number += 1

    }
    if (numbersArr.length == 0) {
        console.log('Empty');
    } else {
        console.log(numbersArr.join('\n'));
    }
}

solve(['remove', 
'remove', 
'remove']
)