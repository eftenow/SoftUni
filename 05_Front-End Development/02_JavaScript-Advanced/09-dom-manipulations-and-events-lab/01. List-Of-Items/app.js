function addItem() {
    let itemsElement = document.getElementById('items');
    let inputTextElement = document.getElementById('newItemText');

    let newItem = document.createElement('li');
    newItem.textContent = inputTextElement.value;
    inputTextElement.value = '';
    

    itemsElement.appendChild(newItem)

}