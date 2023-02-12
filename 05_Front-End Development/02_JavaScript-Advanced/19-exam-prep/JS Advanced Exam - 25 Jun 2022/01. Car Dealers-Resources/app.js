window.addEventListener("load", solve);

function solve() {
  const makeEl = document.getElementById('make');
  const modelEl = document.getElementById('model');
  const yearEl = document.getElementById('year');
  const fuelTypeEl = document.getElementById('fuel');
  const originalCostEl = document.getElementById('original-cost');
  const sellingPriceEl = document.getElementById('selling-price');
  const publishBtn = document.getElementById('publish');
  const tableBodyEl = document.getElementById('table-body');
  const carsListEl = document.getElementById('cars-list')

  publishBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    if (!makeEl.value || !modelEl.value || !yearEl.value || !originalCostEl.value || !sellingPriceEl.value || !fuelTypeEl.value
      || Number(originalCostEl.value) > Number(sellingPriceEl.value)) {
      return;
    };

    let carData = document.createElement('tr');
    carData.className = 'row';

    let make = document.createElement('td');
    make.textContent = makeEl.value;
    let editMake = makeEl.value;

    let model = document.createElement('td');
    model.textContent = modelEl.value;
    let editModel = modelEl.value;

    let year = document.createElement('td');
    year.textContent = yearEl.value;
    let editYear = yearEl.value;

    let fuelType = document.createElement('td');
    fuelType.textContent = fuelTypeEl.value;

    let originalCost = document.createElement('td');
    originalCost.textContent = originalCostEl.value;
    let editOriginalCost = originalCostEl.value;

    let sellingPrice = document.createElement('td');
    sellingPrice.textContent = sellingPriceEl.value;
    let editSellingPrice = sellingPriceEl.value;

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');

    let sellBtn = document.createElement('button');
    sellBtn.textContent = 'Sell';
    sellBtn.classList.add('action-btn');
    sellBtn.classList.add('sell');

    let actionBtns = document.createElement('td');
    actionBtns.appendChild(editBtn);
    actionBtns.appendChild(sellBtn);

    carData.appendChild(make);
    carData.appendChild(model);
    carData.appendChild(year);
    carData.appendChild(fuelType);
    carData.appendChild(originalCost);
    carData.appendChild(sellingPrice);
    carData.appendChild(actionBtns);
    tableBodyEl.appendChild(carData);

    makeEl.value = '';
    modelEl.value = '';
    yearEl.value = '';
    originalCostEl.value = '';
    sellingPriceEl.value = '';

    editBtn.addEventListener('click', function () {
      carData.remove();
      makeEl.value = editMake;
      modelEl.value = editModel;
      yearEl.value = editYear;
      originalCostEl.value = editOriginalCost;
      sellingPriceEl.value = editSellingPrice;
    })

    sellBtn.addEventListener('click', function () {
      let soldCar = document.createElement('li');
      soldCar.className = 'each-list';

      let car = document.createElement('span');
      car.textContent = `${make.textContent} ${model.textContent}`

      let productionYear = document.createElement('span');
      productionYear.textContent = year.textContent;

      let profitMade = document.createElement('span');
      profitMade.textContent = Number(editSellingPrice) - Number(editOriginalCost);

      carData.remove();

      soldCar.appendChild(car);
      soldCar.appendChild(productionYear);
      soldCar.appendChild(profitMade);
      carsListEl.appendChild(soldCar);

      let totalProfitEl = document.getElementById('profit');
      let currentProfit = totalProfitEl.textContent;
      let newTotalProfitValue = Number(currentProfit) + Number(profitMade.textContent);
      totalProfitEl.textContent = Math.round(newTotalProfitValue).toFixed(2);
    })
  })
}


