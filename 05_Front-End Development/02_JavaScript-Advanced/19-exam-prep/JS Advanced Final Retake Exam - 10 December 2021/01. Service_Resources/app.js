window.addEventListener('load', solve);

function solve() {
    const productTypeEl = document.getElementById('type-product');
    const problemDescriptionEl = document.getElementById('description');
    const clientNameEl = document.getElementById('client-name');
    const clientPhoneEl = document.getElementById('client-phone');
    const sumbitBtn = document.querySelector('button[type="submit"]');
    const receivedOrders = document.getElementById('received-orders');
    const completedOrders = document.getElementById('completed-orders');
    const clearBtn = document.getElementsByClassName('clear-btn')[0];

    sumbitBtn.addEventListener('click', function(ev){
        ev.preventDefault();
        if (!problemDescriptionEl.value ||
            !clientNameEl.value ||
            !clientPhoneEl.value){
                console.log('asdasd');
                return;
            }
        
        const productType = document.createElement('h2');
        productType.textContent = `Product type for repair: ${productTypeEl.value}`;

        const clientInfo = document.createElement('h3');
        clientInfo.textContent = `Client information: ${clientNameEl.value}, ${clientPhoneEl.value}`;

        const problemDescription = document.createElement('h4');
        problemDescription.textContent = `Description of the problem: ${problemDescriptionEl.value}`;

        const startBtn = document.createElement('button');
        startBtn.className = 'start-btn';
        startBtn.textContent = 'Start repair';

        const finishBtn = document.createElement('button');
        finishBtn.className = 'finish-btn';
        finishBtn.textContent = 'Finish repair';
        finishBtn.disabled = true;

        const container = document.createElement('div');
        container.className = 'container';

        container.appendChild(productType);
        container.appendChild(clientInfo);
        container.appendChild(problemDescription);
        container.appendChild(startBtn);
        container.appendChild(finishBtn);
        receivedOrders.appendChild(container);

        problemDescriptionEl.value = '';
        clientNameEl.value = '';
        clientPhoneEl.value = '';

        startBtn.addEventListener('click', function(){
            startBtn.disabled = true;
            finishBtn.disabled = false;
        });

        finishBtn.addEventListener('click', function(){
            container.removeChild(container.lastChild);
            container.removeChild(container.lastChild);
            completedOrders.appendChild(container);
        });

        clearBtn.addEventListener('click', function(){
            completedOrders.removeChild(container);
        })
        
    })
}