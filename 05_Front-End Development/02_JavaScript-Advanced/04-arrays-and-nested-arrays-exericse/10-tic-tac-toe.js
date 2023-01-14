function solve(moves) {
    let matrix = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let player;
    function printMatrix() {
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join("\t"));
        }
    }

    function boardIsFull() {
        let isFull = true;
        let player;
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                if (!matrix[r][c]) {
                    isFull = false;
                };
            };
        };
        return isFull;
    }

    function isWinner(row_, col_) {
        let player_ = matrix[row_][col_];

        for (let i = 0; i < 3; i++) {
            if (player_ == matrix[i][0] && player_ == matrix[i][1] && player_ == matrix[i][2]) {
                return true;
            } else if (player_ == matrix[0][i] && player_ == matrix[1][i] && player_ == matrix[2][i]) {
                return true;
            };
        }
        if (matrix[0][0] === player_ && matrix[1][1] === player_ && matrix[2][2] === player_) {
            return true;
        } else if (matrix[0][2] === player_ && matrix[1][1] === player_ && matrix[2][0] === player_) {
            return true;
        }
    }

    let playerNumber = 0;

    while (moves) {
        let move = moves.shift().split(' ');
        let row = Number(move[0]);
        let col = Number(move[1]);
        let choosenField = String(matrix[row][col]);

        if (choosenField == 'X' || choosenField == 'O') {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
        if (playerNumber % 2 == 0) {
            player = 'X';
        } else {
            player = 'O';
        }
        playerNumber += 1
        matrix[row][col] = player;
        if (isWinner(row, col)) {
            console.log(`Player ${player} wins!`);
            return printMatrix();
        } else if (boardIsFull()) {
            console.log("The game ended! Nobody wins :(");
            return printMatrix();
        }
    }
}


