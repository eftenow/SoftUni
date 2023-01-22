function solve() {
    let selectOptions = document.getElementById('selectMenuTo');
    const inputField = document.getElementById('input');
    const outputField = document.getElementById('result');

    let optionBin = document.createElement("option");
    optionBin.textContent = 'Binary';
    optionBin.value = 'binary';
    document.getElementById('selectMenuTo').appendChild(optionBin);

    let optionHex = document.createElement("option");
    optionHex.textContent = 'Hexadecimal';
    optionHex.value = 'hexadecimal';
    document.getElementById('selectMenuTo').appendChild(optionHex);
    
    let converter = {
        'binary': num => num.toString(2),
        'hexadeicmal': num => num.toString(16).toUpperCase()
    }
    let converterButton = document.querySelector('button');


    converterButton.addEventListener('click', (ev) =>{
        //outputField.value = converter[selectOptions.value](+inputField.value);
        console.log(converter[selectOptions.value](inputField.value));
    })


}

