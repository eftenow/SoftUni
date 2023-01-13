function solve(matrix){
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let row=0; row < matrix.length; row++){
        let col = row;
        firstDiagonalSum += Number(matrix[row][col]);
    } for (let row=0; row < matrix.length; row++){
        let col = matrix.length - row - 1;
        secondDiagonalSum += Number(matrix[row][col]);
    }
    
    console.log(firstDiagonalSum, secondDiagonalSum);
}