async function lockedProfile() {
    let url = `http://localhost:3030/jsonstore/advanced/profiles`;

    let allProfiles = await ((await fetch(url)).json());
    
    Object.entries(allProfiles).forEach((entry, index) => {
        let profileInfo = entry[1];

        let name = profileInfo.username;
        let email = profileInfo.email;
        let age = profileInfo.age;

        const wrapper = document.createElement('div');
        wrapper.className = 'profile';

        const img = document.createElement('img');
        img.src = './iconProfile2.png';
        img.className = 'userIcon';

        const lockLabel = document.createElement('label');
        lockLabel.textContent = 'Lock';
        const lockBtn = document.createElement('input');
        lockBtn.value = 'lock';
        lockBtn.type = 'radio'
        lockBtn.name = `user${index+2}locked`
        lockBtn.checked = true;


        const unlockLabel = document.createElement('label');
        unlockLabel.textContent = 'Unlock'
        const unlockBtn = document.createElement('input');
        unlockBtn.value = 'unlock';
        unlockBtn.type = 'radio'
        unlockBtn.name = `user${index+2}locked`

        const hrEl = document.createElement('hr');

        const usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username';
        const usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.name = `user${index+2}Username`;
        usernameInput.value = name;
        usernameInput.disabled = true;
        usernameInput.readOnly = true;

        const hiddenFieldsDiv = document.createElement('div');
        hiddenFieldsDiv.setAttribute('id', `user${index+2}HiddenFields`);
        const newHrEl = document.createElement('hr');

        const labelEmail = document.createElement('label');
        labelEmail.textContent = 'Email:'
        const inputEmail = document.createElement('input');
        inputEmail.type = 'email';
        inputEmail.name = 'user1Email';
        inputEmail.value = email;
        inputEmail.disabled = true;
        inputEmail.readOnly = true;

        const labelAge = document.createElement('label');
        labelAge.textContent = 'Age:'
        const inputAge = document.createElement('input');
        inputAge.type = 'email';
        inputAge.name = 'user1Age';
        inputAge.value = age;
        inputAge.disabled = true;
        inputAge.readOnly = true;

        hiddenFieldsDiv.append(newHrEl, labelEmail, inputEmail, labelAge, inputAge)
        hiddenFieldsDiv.style.display = 'none';

        const showMoreBtn = document.createElement('button');
        showMoreBtn.textContent = 'Show more'

        showMoreBtn.addEventListener('click', function(ev){
            const selectedProfile = ev.target.parentNode;
            ev.preventDefault();
            const hiddenSection = selectedProfile.lastChild.previousSibling;
            let selectedBtn = selectedProfile.querySelector('input[type="radio"]:checked');
            let showMoreBtn = ev.target;

            if (selectedBtn.value == 'lock'){
                return;
            }

            showMoreBtn.textContent = showMoreBtn.textContent == 'Show more'
            ? 'Hide it'
            : 'Show more';

            hiddenSection.style.display =  hiddenSection.style.display == 'block'
            ? 'none'
            : 'block';
   
        })

        wrapper.append(img, lockLabel, lockBtn, unlockLabel, unlockBtn, hrEl, usernameLabel, usernameInput, hiddenFieldsDiv, showMoreBtn);
        document.getElementById('main').appendChild(wrapper);

    });


}