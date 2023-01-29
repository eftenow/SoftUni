function calculator() {
    let firstNumElement;
    let secondNumElement;
    let resultElement;

    function init(selector1, selector2, resultSelector) {
        firstNumElement = document.querySelector(selector1);
        secondNumElement = document.querySelector(selector2);
        resultElement = document.querySelector(resultSelector);
        console.log(resultElement.value);

    }

    function add() {
        resultElement.value = Number(firstNumElement.value) + Number(secondNumElement.value);

    }
    function subtract() {
        resultElement.value = Number(firstNumElement.value) - Number(secondNumElement.value);
        
    }

    return{
        init,
        add,
        subtract
    }
}   


const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 




