function solve() {
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let infoEl = document.querySelector('.info');
    let currentStop = {
        next: 'depot'
    }

    function depart() {
        arriveBtn.disabled = false;
        departBtn.disabled = true;
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStop.next}`)
            .then(res => res.json())
            .then(res => {
                currentStop = res;
                infoEl.textContent = `Next stop ${currentStop.name}`;
                
            })
    }

    function arrive() {
        arriveBtn.disabled = true;
        departBtn.disabled = false;

        infoEl.textContent = `Arriving at ${currentStop.name}`;
  

    }

    return {
        depart,
        arrive
    };
}

let result = solve();