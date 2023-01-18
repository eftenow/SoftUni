function sumTable() {
    let pricesElement = document.querySelectorAll('tr:not(:last-child) td:nth-child(2)');
    let pricesArr = Array.from(pricesElement);
    let totalPrice = pricesArr.reduce((sum, val) => sum + Number(val.textContent), 0);
    document.getElementById('sum').textContent = totalPrice;
}