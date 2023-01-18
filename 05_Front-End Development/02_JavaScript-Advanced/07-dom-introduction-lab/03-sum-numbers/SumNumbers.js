function calc() {
    let firstNum = document.getElementById('num1');
    let secondNum = document.getElementById('num2');
    let result = Number(firstNum.value) + Number(secondNum.value);
    let outputAreaElement = document.getElementById('sum');
    outputAreaElement.value = result;
}
