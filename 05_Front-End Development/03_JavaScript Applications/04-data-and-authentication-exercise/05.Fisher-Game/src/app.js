const loadBtn = document.querySelector('.load');
const baseUrl = 'http://localhost:3030/data/catches';
const catchesEl = document.getElementById('catches');
const addBtn = document.querySelector('.add');
const addForm = document.querySelector('#addForm');
const logoutBtn = document.getElementById('logout');


addForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const newCatch = {
        _ownerId: localStorage.accessToken,
        angler: form.get('angler'),
        weight: form.get('weight'),
        species: form.get('species'),
        location: form.get('location'),
        bait: form.get('bait'),
        captureTime: form.get('captureTime')
    };

    console.log(newCatch);
    let addResponse = await fetch('http://localhost:3030/data/catches', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': `${localStorage.accessToken}`
        },
        body: JSON.stringify(newCatch)
    })

    let addedCatch = await addResponse.json();
    createNewCatch(addedCatch);
    addForm.reset();

})

loadBtn.addEventListener('click', async () => {
    let response = await fetch(baseUrl);
    let allCatches = await response.json();
    catchesEl.textContent = '';
    Object.values(allCatches).forEach(catchData => {
        createNewCatch(catchData);
    });

})



function createNewCatch(data) {
    const anglerLabel = document.createElement('label');
    anglerLabel.textContent = 'Angler';
    const weightLabel = document.createElement('label');
    weightLabel.textContent = 'Weight';
    const speciesLabel = document.createElement('label');
    speciesLabel.textContent = 'Species';
    const locationLabel = document.createElement('label');
    locationLabel.textContent = 'Location';
    const baitLabel = document.createElement('label');
    baitLabel.textContent = 'Bait';
    const timeLabel = document.createElement('label');
    timeLabel.textContent = 'Capture Time';

    const angler = document.createElement('input');
    angler.className = 'angler';
    angler.value = data.angler;

    const weight = document.createElement('input');
    weight.className = 'weight';
    weight.value = data.weight;

    const species = document.createElement('input');
    species.className = 'species';
    species.value = data.species;

    const location = document.createElement('input');
    location.className = 'location';
    location.value = data.location;

    const bait = document.createElement('input');
    bait.className = 'bait';
    bait.value = data.bait;

    const captureTime = document.createElement('input');
    captureTime.className = 'captureTime';
    captureTime.value = data.captureTime;

    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update'
    updateBtn.className = 'update';
    updateBtn.dataset.id = data._id;
    updateBtn.addEventListener('click', onClickUpdate);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    deleteBtn.dataset.id = data._id;
    deleteBtn.addEventListener('click', onClickDelete);

    let newCatch = document.createElement('div');
    newCatch.className = 'catch';
    newCatch.dataset.creatorId = data._ownerId;

    deleteBtn.disabled = data._ownerId == localStorage._id ? false : true
    updateBtn.disabled = data._ownerId == localStorage._id ? false : true

    newCatch.append(anglerLabel, angler, weightLabel, weight, speciesLabel, species, locationLabel, location,
        baitLabel, bait, timeLabel, captureTime, updateBtn, deleteBtn);
    catchesEl.appendChild(newCatch);



}


async function onClickUpdate(ev) {
    const currentCatch = ev.currentTarget.closest(".catch");
    const id = currentCatch.querySelector('button').dataset.id;
    const url = `http://localhost:3030/data/catches/${id}`;

    let weight = currentCatch.querySelector('.weight').value;
    let angler = currentCatch.querySelector('.angler').value;
    let species = currentCatch.querySelector('.species').value;
    let location = currentCatch.querySelector('.location').value;
    let bait = currentCatch.querySelector('.bait').value;
    let captureTime = currentCatch.querySelector('.captureTime').value;

    let updatedCatch = {weight, angler, species, location, bait, captureTime}
    
    let updateResponse = await fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': `${localStorage.accessToken}`
        },
        body: JSON.stringify(updatedCatch)
    });

    let updateResult = await updateResponse.json();
}

async function onClickDelete(ev) {
    let deleteButton = ev.target;
    let catchToDelete = deleteButton.closest('.catch');

    const creatorId = catchToDelete.dataset.creatorId;
    const currentUserId = window.localStorage.getItem('_id');
    console.log(catchToDelete);
    console.log();

    try {
        if (creatorId !== currentUserId) {
            throw new Error('You must be the owner of the catch in order to delete it!')
        }
        const id = deleteButton.dataset.id;
        const url = `http://localhost:3030/data/catches/${id}`;

        const deleteResponse = await fetch(url, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                'X-Authorization': `${localStorage.accessToken}`
            }
        })
        catchToDelete.remove();

    } catch (error) {
        console.error(error);
        alert(error);
    }

}

window.addEventListener("load", (ev) => {
    if (localStorage.accessToken) {
        addBtn.disabled = false;
    }

});

logoutBtn.addEventListener('click', () =>{
    localStorage.clear();
    location.assign('./login.html');
})