window.addEventListener('load', solve);

function solve() {
    const nextBtn = document.getElementById('next-btn');
    const fnameEl = document.getElementById('first-name');
    const lnameEl = document.getElementById('last-name');
    const peopleCountEl = document.getElementById('people-count');
    const fromDateEl = document.getElementById('from-date');
    const daysCountEl = document.getElementById('days-count');
    const ticketInfoList = document.getElementsByClassName('ticket-info-list')[0];
    const confirmTicketList = document.getElementsByClassName('confirm-ticket')[0];

    nextBtn.addEventListener('click', function (ev) {
        ev.preventDefault();
        if (
            !fnameEl.value || !lnameEl.value || !peopleCountEl.value || !fromDateEl.value || !daysCountEl.value) {
            return;
        }



        const fullName = document.createElement('h3');
        fullName.textContent = `Name: ${fnameEl.value} ${lnameEl.value}`;

        const fromDate = document.createElement('p');
        fromDate.textContent = `From date: ${fromDateEl.value}`;

        const daysCount = document.createElement('p');
        daysCount.textContent = `For ${daysCountEl.value} days`;

        const peopleCount = document.createElement('p');
        peopleCount.textContent = `For ${peopleCountEl.value} people`

        let editFname = fnameEl.value;
        let editLname = lnameEl.value;
        let editPeopleCount = peopleCountEl.value;
        let editFromDate = fromDateEl.value;
        let editDaysCount = daysCountEl.value;

        fnameEl.value = '';
        lnameEl.value = '';
        peopleCountEl.value = '';
        fromDateEl.value = '';
        daysCountEl.value = '';

        const ticket = document.createElement('li');
        ticket.className = 'ticket';

        const wrapper = document.createElement('article');

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        const continueBtn = document.createElement('button');
        continueBtn.textContent = 'Continue'
        continueBtn.className = 'continue-btn';

        editBtn.addEventListener('click', function () {
            nextBtn.disabled = false;
            ticket.remove();
            fnameEl.value = editFname;
            lnameEl.value = editLname;
            peopleCountEl.value = editPeopleCount;
            fromDateEl.value = editFromDate;
            daysCountEl.value = editDaysCount;
        });

        continueBtn.addEventListener('click', function(){
            ticket.removeChild(ticket.lastChild);
            ticket.removeChild(ticket.lastChild);
            const confirmBtn = document.createElement('button');
            confirmBtn.className = 'confirm-btn';
            confirmBtn.textContent = 'Confirm';
            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'cancel-btn';
            cancelBtn.textContent = 'Cancel';

            cancelBtn.addEventListener('click', function(){
            nextBtn.disabled = false;
            ticket.remove();  
            });

            confirmBtn.addEventListener('click', function(){
                const main = document.getElementById('main');
                main.remove();
                const header = document.createElement('h1');
                header.textContent = 'Thank you, have a nice day!';
                header.id = 'thank-you';
                
                const backBtn = document.createElement('button');
                backBtn.textContent = 'Back';
                backBtn.id = 'back-btn';

                document.getElementById('body').appendChild(header);
                document.getElementById('body').appendChild(backBtn);

            })

            ticket.appendChild(confirmBtn);
            ticket.appendChild(cancelBtn);
            confirmTicketList.appendChild(ticket);
        })

        nextBtn.disabled = true;
        wrapper.appendChild(fullName);
        wrapper.appendChild(fromDate);
        wrapper.appendChild(daysCount);
        wrapper.appendChild(peopleCount);

        ticket.appendChild(wrapper);
        ticket.appendChild(editBtn);
        ticket.appendChild(continueBtn);
        ticketInfoList.appendChild(ticket);
    })

}




