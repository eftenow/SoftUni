function solve() {
    const fNameEl = document.getElementById('fname');
    const lNameEl = document.getElementById('lname');
    const emailEl = document.getElementById('email');
    const birthEl = document.getElementById('birth');
    const positionEl = document.getElementById('position');
    const salaryEl = document.getElementById('salary');
    const addWorkerBtn = document.getElementById('add-worker');
    const tbodyEl = document.getElementById('tbody');
    const salaryBudgetEl = document.getElementById('sum');

    addWorkerBtn.addEventListener('click', function (ev) {
        ev.preventDefault();
        if (
            !fNameEl.value || !lNameEl.value || !emailEl.value || !birthEl.value || !positionEl.value || !salaryEl.value) {
            return;
        };

        const wrapper = document.createElement('tr');

        const fname = document.createElement('td');
        fname.textContent = fNameEl.value;
        let fnameEdit = fNameEl.value;

        const lname = document.createElement('td');
        lname.textContent = lNameEl.value;
        const lnameEdit = lNameEl.value;

        const email = document.createElement('td');
        email.textContent = emailEl.value;
        const emailEdit = emailEl.value;

        const birth = document.createElement('td');
        birth.textContent = birthEl.value;
        const birthEdit = birthEl.value;

        const position = document.createElement('td');
        position.textContent = positionEl.value;
        const positionEdit = positionEl.value;

        const salary = document.createElement('td');
        salary.textContent = salaryEl.value;
        const salaryEdit = salaryEl.value;

        const firedBtn = document.createElement('button');
        firedBtn.textContent = 'Fired';
        firedBtn.className = 'fired';

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit';

        const btnSection = document.createElement('td');
        btnSection.appendChild(editBtn);
        btnSection.appendChild(firedBtn);

        wrapper.appendChild(fname);
        wrapper.appendChild(lname);
        wrapper.appendChild(email);
        wrapper.appendChild(birth);
        wrapper.appendChild(position);
        wrapper.appendChild(salary);
        wrapper.appendChild(btnSection);
        tbodyEl.appendChild(wrapper);

        let currentSalBudg = salaryBudgetEl.textContent;
        salaryBudgetEl.textContent = (Number(currentSalBudg) + Number(salary.textContent)).toFixed(2);

        fNameEl.value = '';
        lNameEl.value = '';
        emailEl.value = '';
        birthEl.value = '';
        positionEl.value = '';
        salaryEl.value = '';

        editBtn.addEventListener('click', function () {
            wrapper.remove();
            let currentSalBudg = salaryBudgetEl.textContent;
            salaryBudgetEl.textContent = (Number(currentSalBudg) - Number(salary.textContent)).toFixed(2);
            fNameEl.value = fnameEdit;
            lNameEl.value = lnameEdit;
            emailEl.value = emailEdit;
            birthEl.value = birthEdit;
            positionEl.value = positionEdit;
            salaryEl.value = salaryEdit;
        });

        firedBtn.addEventListener('click', function () {
            wrapper.remove();
            let currentSalBudg = salaryBudgetEl.textContent;
            salaryBudgetEl.textContent = (Number(currentSalBudg) - Number(salary.textContent)).toFixed(2);

        })


    })
}
solve()