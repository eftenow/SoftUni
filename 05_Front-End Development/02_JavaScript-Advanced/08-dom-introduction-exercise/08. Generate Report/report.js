function generateReport() {
    let colsElement = document.querySelectorAll('tr th input');
    let rowsElement = document.querySelectorAll('tr');
    colsArr = Array.from(colsElement);
    let colsChecked = [];

    for (const checkColumn of colsArr) {
        if (checkColumn.checked) {
            colsChecked.push(colsArr.indexOf(checkColumn));
        }
    }
    let report = [];

    for (let row = 1; row < rowsElement.length; row++) {
        let currentRowObj = {};
        for (let col of colsChecked) {
            const rowName = document.querySelector(`tr:nth-child(1) th:nth-child(${col + 1}) input`).name;
            const textContent = document.querySelector(`tr:nth-child(${row}) td:nth-child(${col + 1})`).textContent.trim();
            currentRowObj[rowName] = textContent;
        }
        report.push(currentRowObj);
    }
    document.getElementById('output').textContent = JSON.stringify(report);
}
