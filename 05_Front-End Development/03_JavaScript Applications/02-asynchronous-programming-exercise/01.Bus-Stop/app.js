function getInfo() {
    let stopId = document.getElementById('stopId');
    let busUrl = `http://localhost:3030/jsonstore/bus/businfo/` + stopId.value;
    let resultSection = document.getElementById('buses');
    resultSection.innerHTML = '';

    fetch(busUrl)
        .then(res => res.json())
        .then(data => {
            document.getElementById('stopName').textContent = Object.values(data)[1];

            Object.entries(data.buses).map(bus => {
                let addBus = document.createElement('li');
                addBus.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
                resultSection.appendChild(addBus);
            });
        })
        .catch(err => {
            document.getElementById('stopName').textContent = 'Error';
        })

}