function validate() {
    const submitBtn = document.getElementById('submit');
    const checkBoxElement = document.getElementById('company');
    const companyInfoElement = document.getElementById('companyInfo');
    const companyNumberElement = document.getElementById('companyNumber');

    const usernameReg = /^[a-zA-Z0-9]{3,20}$/;
    const passwordReg = /^\w{5,15}$/;
    const emailReg = /.*@.*\..*/;

    checkBoxElement.addEventListener('change', (ev) => {
        companyInfoElement.style.display = ev.target.checked ? 'block' : 'none';
    })

    submitBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        const usernameElement = document.getElementById('username');
        const passwordElement = document.getElementById('password');
        const cofirmPasswordElement = document.getElementById('confirm-password');
        const emailElement = document.getElementById('email');

        if (!usernameReg.test(usernameElement.value)) {
            usernameElement.style.borderColor = 'red';
        } else {
            usernameElement.style.borderColor = '';
        };
        if (!emailReg.test(emailElement.value)) {
            emailElement.style.borderColor = 'red';
        } else {
            emailElement.style.borderColor = '';
        };
        if (!passwordReg.test(passwordElement.value)) {
            passwordElement.style.borderColor = 'red';
        } else {
            passwordElement.style.borderColor = '';
        };

        if (!passwordReg.test(cofirmPasswordElement.value)) {
            cofirmPasswordElement.style.borderColor = 'red';
        } else {
            cofirmPasswordElement.style.borderColor = '';
            if (cofirmPasswordElement.value !== passwordElement.value) {
                cofirmPasswordElement.style.borderColor = 'red';
                passwordElement.style.borderColor = 'red';
            }
        };

        if (companyInfoElement.style.display !== 'none' && companyNumberElement.value < 1000 || companyNumberElement.value > 9999) {
            companyNumberElement.style.borderColor = 'red';
        } else {
            companyNumberElement.style.borderColor = '';
        };

        const pairContainers = Array.from(document.querySelectorAll(".pairContainer input"));
        const validElement = document.getElementById('valid');
        const allFieldsAreValid = pairContainers
            .filter((element) => element.style.display !== 'none')
            .every((element) => element.style.borderColor !== 'red');
        if (allFieldsAreValid) {
            validElement.style.display = 'block';
        } else {
            validElement.style.display = 'none';
        }
    })
}
