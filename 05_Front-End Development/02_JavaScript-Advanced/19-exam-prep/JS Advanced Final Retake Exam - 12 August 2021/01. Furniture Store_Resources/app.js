window.addEventListener('load', solve);

function solve() {
    const modelEl = document.getElementById('model');
    const yearEl = document.getElementById('year');
    const descriptionEl = document.getElementById('description');
    const priceEl = document.getElementById('price');
    const addBtn = document.getElementById('add');
    const furnitureList = document.getElementById("furniture-list");


    addBtn.addEventListener('click', onClickAdd);

    function onClickAdd(ev) {
        ev.preventDefault();

        if (!modelEl.value || !yearEl.value || !descriptionEl.value || !priceEl.value
            || Number(yearEl.value) < 0 || Number(priceEl.value) < 0) { // CHECK IF PRICE 0 IS VALID 
            return;
        }

        const firstWrapper = document.createElement('tr');
        firstWrapper.className = 'info';

        const model = document.createElement('td');
        model.textContent = modelEl.value;

        const price = document.createElement('td');
        price.textContent = `${Number(priceEl.value).toFixed(2)}`;

        const btnSection = document.createElement('td');
        const moreBtn = document.createElement('button');
        moreBtn.className = 'moreBtn';
        moreBtn.textContent = 'More Info';

        const buyBtn = document.createElement('button');
        buyBtn.className = 'buyBtn';
        buyBtn.textContent = 'Buy it';
        btnSection.appendChild(moreBtn);
        btnSection.appendChild(buyBtn);

        const secondWrapepr = document.createElement('tr');
        secondWrapepr.className = 'hide';

        const year = document.createElement('td');
        year.textContent = `Year: ${yearEl.value}`;

        const description = document.createElement('td');
        description.colSpan = "3";
        description.textContent = `Description: ${descriptionEl.value}`

        firstWrapper.appendChild(model);
        firstWrapper.appendChild(price);
        firstWrapper.appendChild(btnSection);

        secondWrapepr.appendChild(year);
        secondWrapepr.appendChild(description);

        furnitureList.appendChild(firstWrapper);
        furnitureList.appendChild(secondWrapepr);

        moreBtn.addEventListener('click', function(ev){
            const btn = ev.target;
            const selectedItem = ev.target.parentNode.parentNode.parentNode;
            const hiddenSection = selectedItem.querySelector('.hide');
            console.log(selectedItem);

            btn.textContent = btn.textContent == 'More Info'
            ? 'Less Info'
            : 'More Info';

            hiddenSection.style.display = hiddenSection.style.display == 'contents'
            ? 'none'
            : 'contents';
        });

        buyBtn.addEventListener('click', function(){
            firstWrapper.remove();
            secondWrapepr.remove();
            const totalPrice = document.getElementsByClassName('total-price')[0].textContent;
            console.log(totalPrice);
            document.getElementsByClassName('total-price')[0].textContent = (Number(totalPrice) + Number(price.textContent)).toFixed(2);
        })
    }


}
