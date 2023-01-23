function addItem() {
    let itemsElement = document.getElementById('items');
    let inputTextElement = document.getElementById('newItemText');
    let newLiElement = document.createElement('li');
    let newDeleteElement = document.createElement('a');

    function deleteElement(e) {
        let selectedItem = e.currentTarget;
        selectedItem.parentNode.remove();
    }

    newDeleteElement.href = '#';
    newDeleteElement.textContent = '[Delete]';
    newDeleteElement.addEventListener('click', deleteElement)
    newLiElement.textContent = inputTextElement.value;
    inputTextElement.value = '';

    newLiElement.appendChild(newDeleteElement);
    itemsElement.appendChild(newLiElement);
}