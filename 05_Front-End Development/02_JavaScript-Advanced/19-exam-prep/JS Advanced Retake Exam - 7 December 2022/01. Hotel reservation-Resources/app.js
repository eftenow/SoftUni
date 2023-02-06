window.addEventListener('load', solve)
function solve() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateIn = document.getElementById('date-in');
    const dateOut = document.getElementById('date-out');
    const peopleCount = document.getElementById('people-count');
    const nextBtn = document.getElementById('next-btn');
    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');

    nextBtn.addEventListener('click', onNext)
    function onNext(ev) {
        ev.preventDefault();
        if (firstName.value == ''
            || lastName.value == ''
            || dateIn.value == ''
            || dateOut.value == ''
            || peopleCount.value == ''
            || new Date(dateIn.value) >= new Date(dateOut.value)) {
            return;
        }

        let reservationLi = document.createElement('li');
        reservationLi.setAttribute('class', 'reservation-content');
        let articleInfo = document.createElement('article');

        const firstPar = document.createElement('h3');
        firstPar.textContent = `Name: ${firstName.value} ${lastName.value}`;

        const secondPar = document.createElement('p');
        secondPar.textContent = `From date: ${dateIn.value}`;

        const thirdPar = document.createElement('p');
        thirdPar.textContent = `To date: ${dateOut.value}`

        const fourthPar = document.createElement('p');
        fourthPar.textContent = `For ${peopleCount.value} people`

        const editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        const continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        articleInfo.appendChild(firstPar);
        articleInfo.appendChild(secondPar);
        articleInfo.appendChild(thirdPar);
        articleInfo.appendChild(fourthPar);

        reservationLi.appendChild(articleInfo);
        reservationLi.appendChild(editBtn);
        reservationLi.appendChild(continueBtn);
        infoList.appendChild(reservationLi);

        let fNameEdit = firstName.value;
        let lNameEdit = lastName.value;
        let dateInEdit = dateIn.value;
        let dateOutEdit = dateOut.value;
        let peopleCountEdit = peopleCount.value;
        firstName.value = '';
        lastName.value = '';
        dateIn.value = '';
        dateOut.value = '';
        peopleCount.value = '';

        nextBtn.disabled = true;
        ///////////////////////////////////////////////////////////
        editBtn.addEventListener('click', (ev) => {
            firstName.value = fNameEdit;
            lastName.value = lNameEdit;
            dateIn.value = dateInEdit;
            dateOut.value = dateOutEdit;
            peopleCount.value = peopleCountEdit;

            reservationLi.remove();
            nextBtn.disabled = false;
        })

        continueBtn.addEventListener('click', onContinue);
        function onContinue() {
            let continueData = document.createElement('li');
            continueData.setAttribute('class', 'reservation-content');
            let confirmBtn = document.createElement('button');
            let cancelBtn = document.createElement('button');

            let articleContinue = document.createElement('article');
            articleContinue = articleInfo;

            confirmBtn.textContent = 'Confirm';
            cancelBtn.textContent = 'Cancel';

            confirmBtn.setAttribute('class', 'confirm-btn');
            cancelBtn.setAttribute('class', 'cancel-btn');

            continueData.appendChild(articleContinue);
            continueData.appendChild(confirmBtn);
            continueData.appendChild(cancelBtn);
            reservationLi.remove();
            confirmList.appendChild(continueData);

            const verificationElement = document.getElementById('verification');

            confirmBtn.addEventListener('click', onConfirm)
            function onConfirm() {
                continueData.remove();
                nextBtn.disabled = false;
                verificationElement.setAttribute('class', 'reservation-confirmed');
                verificationElement.textContent = 'Confirmed.';
            };

            cancelBtn.addEventListener('click', onCancel)
            function onCancel() {
                continueData.remove();
                nextBtn.disabled = false;
                verificationElement.setAttribute('class', 'reservation-cancelled');
                verificationElement.textContent = 'Cancelled.';

            }
    }

}

}





