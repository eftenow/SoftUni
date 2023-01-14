function solve(matrix) {
    let isMagical = true;
    let magicalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        magicalSum += Number(matrix[0][i]);
    }
    for (let row = 0; row < matrix.length; row++) {
        let colSum = 0;
        let rowSum = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            colSum += Number(matrix[row][col]);
            if (col < matrix.length) {
                rowSum += Number(matrix[col][row]);
            }
        };
        if (colSum !== magicalSum || rowSum !== magicalSum) {
            isMagical = false;
            break;
        }
    }
    return isMagical;


}

console.log(solve(
    [[1, 0, 0, 2],
    [0, 0, 1, 2],
    [0, 1, 0, 2]
]));