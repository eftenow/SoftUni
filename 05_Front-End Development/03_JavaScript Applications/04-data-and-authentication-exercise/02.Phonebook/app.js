function attachEvents() {
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    const personEl = document.getElementById('person');
    const phoneEl = document.getElementById('phone');
    const phonebookEl = document.getElementById('phonebook');

    loadBtn.addEventListener('click', loadContacts);
    createBtn.addEventListener('click', addNewContanct);
    let baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    async function loadContacts() {
        let response = await fetch(baseUrl);
        let allContacts = await response.json();
        phonebookEl.textContent = '';

        Object.values(allContacts).forEach(contactInfo => {
            addToPhonebook(contactInfo)
        });

    };

    async function addNewContanct() {

        let newContact = {
            person : personEl.value,
            phone : phoneEl.value
        }

        personEl.value = '';
        phoneEl.value = '';

        let response = await fetch(baseUrl, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newContact)
        })

        let contactInfo = await response.json();
        addToPhonebook(contactInfo);

    }

    async function onClickRemoveContact(ev) {
        let id = ev.target.parentNode.id;

        let response = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
        loadContacts();


    }

    function addToPhonebook(contactInfo) {
        let newContact = document.createElement('li');
            newContact.textContent = `${contactInfo.person}: ${contactInfo.phone}`
            newContact.id = contactInfo._id;

            let delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', onClickRemoveContact);

            newContact.appendChild(delBtn);

            phonebookEl.appendChild(newContact);
    }
}

attachEvents();