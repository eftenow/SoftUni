function validate() {
    const inputField = document.getElementById('email');
    inputField.addEventListener('change', (event) => {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputField.value)) {
            inputField.className = 'error';
        } else{
            inputField.className = '';
        }
    });
}