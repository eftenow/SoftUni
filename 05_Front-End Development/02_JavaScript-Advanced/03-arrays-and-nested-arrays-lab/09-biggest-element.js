function solve(matrix){
    let biggestNum = -Number.MAX_SAFE_INTEGER;
    for (let row = 0; row < matrix.length; row++){
        for (let col = 0; col < matrix[row].length; col++){
            let num = matrix[row][col];
            if (num > biggestNum){
                biggestNum = num;
            };
        };
    };
    return biggestNum;
};