function solve(matrix) {
    let neighborsCount = 0;


    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let currentEl = matrix[row][col];
            let bottomNeighbor;
            let rightNeighbor;

            if (row + 1 < matrix.length) {
                bottomNeighbor = matrix[row + 1][col];
            }
            if (col + 1 < matrix[row].length) {
                rightNeighbor = matrix[row][col + 1];
            }
            if (currentEl === bottomNeighbor) {
                neighborsCount += 1;
            }
            if (currentEl === rightNeighbor) {
                neighborsCount += 1;
            }
        }
    }
    return neighborsCount;

}