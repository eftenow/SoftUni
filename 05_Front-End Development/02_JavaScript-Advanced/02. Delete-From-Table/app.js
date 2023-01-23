function deleteByEmail() {
    let itemToDeleteElement = document.querySelector('input[name=email]').value;
    let emailsElement = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultFieldElement = document.getElementById('result');
    emailsElement = Array.from(emailsElement);

    emailsElement.forEach(email => {
        if (email.textContent == itemToDeleteElement){
            email.parentNode.remove();
            resultFieldElement.textContent = 'Deleted.'
        } else{
            resultFieldElement.textContent = 'Not found.'
        }
    });
}