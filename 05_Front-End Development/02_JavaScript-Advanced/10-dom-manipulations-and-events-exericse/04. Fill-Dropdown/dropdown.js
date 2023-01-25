function addItem() {
    const itemText = document.getElementById('newItemText');
    const itemValue = document.getElementById('newItemValue');
    const optionsMenu = document.getElementById('menu');

    const newItem = document.createElement('option');
    newItem.textContent = itemText.value;
    newItem.value = itemValue.value;
    itemText.value = ''
    itemValue.value = ''

    optionsMenu.appendChild(newItem);
   
}