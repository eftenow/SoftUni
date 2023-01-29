function solve() {
    let btns = document.querySelectorAll('button');
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let table = document.querySelector('table');
    let outputField = document.querySelector('#check p');

    let checkBtn = btns[0].addEventListener('click', checkRowsandCols);
    let clearBtn = btns[1].addEventListener('click', clearBoard);

    function clearBoard(){
        Array.from(document.querySelectorAll('tbody tr td input')).map(field => field.value = '');
        table.style.border = 'none';
        outputField.textContent = "";
    }

    function checkRowsandCols() {
        let rowSums = [];
        let colSums = [];
        for (let i = 1; i <= rows.length; i++) {

            let rowElements = Array.from(document.querySelectorAll(`tbody tr:nth-of-type(${i}) td input`));
            let currentRowSum = rowElements.reduce((acc, el) => acc + Number(el.value), 0);
            let currentColSum = 0;
            for (let j = 1; j <= rows.length; j++) {
                let colElement = document.querySelector(`tbody tr:nth-of-type(${j}) td:nth-of-type(${i}) input`);
                currentColSum += Number(colElement.value);
            }
            rowSums.push(currentRowSum);
            colSums.push(currentColSum);
        }
        let colsSolved = colSums.every((val, i, arr) => val === arr[0]);
        let RowsSolved = rowSums.every((val, i, arr) => val === arr[0]);

        if (RowsSolved === true && colsSolved === true) {
            table.style.border = '2px solid green';
            outputField.style.color = 'green';
            outputField.textContent = "You solve it! Congratulations!";
        } else {
            table.style.border = '2px solid red';
            outputField.style.color = 'red';
            outputField.textContent = "NOP! You are not done yet..." ;
        }
    }
}