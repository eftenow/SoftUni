function solve() {
  const buttons = document.querySelectorAll('button')
  const generateBtn = buttons[0].addEventListener('click', generateOnClick);
  const buyBtn = buttons[1].addEventListener('click', buyOnClick)

  function generateOnClick(ev) {
    const textareas = document.querySelectorAll('textarea')
    const furnitureItemsElement = JSON.parse(textareas[0].value);

    for (const furniture of furnitureItemsElement) {
      let newRow = document.createElement('tr');

      let imgData = document.createElement('td');
      let currentImg = document.createElement('img');
      currentImg.src = furniture.img;
      imgData.appendChild(currentImg);

      let nameData = document.createElement('td');
      let currentName = document.createElement('p');
      currentName.textContent = furniture.name;
      nameData.appendChild(currentName);

      let priceData = document.createElement('td');
      let currentPrice = document.createElement('p');
      currentPrice.textContent = furniture.price;
      priceData.appendChild(currentPrice);

      let factorData = document.createElement('td');
      let currentFactor = document.createElement('p');
      currentFactor.textContent = furniture.decFactor;
      factorData.appendChild(currentFactor);

      let markData = document.createElement('td');
      let currentMark = document.createElement('input');
      currentMark.type = 'checkbox';
      markData.appendChild(currentMark);

      newRow.appendChild(imgData)
      newRow.appendChild(nameData)
      newRow.appendChild(priceData)
      newRow.appendChild(factorData)
      newRow.appendChild(markData)
      document.querySelector('tbody').appendChild(newRow);
    }
  }
  let furnitureBought = [];
  let totalPrice = 0;
  let allFactors = [];

  function buyOnClick(ev) {
    let rows = document.querySelectorAll('tbody tr');
    let outputTextArea = Array.from(document.querySelectorAll('textarea'))[1];

    for (const row of rows) {
      const itemName = row.children[1].children[0].textContent;
      const itemPrice = row.children[2].children[0].textContent;
      const itemFactor = row.children[3].children[0].textContent;
      const checkBox = row.children[4].children[0];

      if (checkBox.checked === true) {
        furnitureBought.push(itemName);
        totalPrice += Number(itemPrice);
        allFactors.push(Number(itemFactor));
      }
    }

    let avgFactor = allFactors.reduce((a, b) => a + b, 0) / allFactors.length;

    outputTextArea.value += `Bought furniture: ${furnitureBought.join(', ')}\n`;
    outputTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputTextArea.value += `Average decoration factor: ${avgFactor}`;


  }
}