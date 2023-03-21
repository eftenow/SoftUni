const registerForm = document.querySelector('main form');
const url = 'http://localhost:3030/users/register';

registerForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const form = new FormData(ev.target);
    let email = form.get('email');
    let password = form.get('password');
    let rePass = form.get('rePass');

    try {
        if (password !== rePass) {
            throw new Error("Passwords don't match.")
        };
        let registerAccount = { email, password };

        let resposne = await fetch(url, {
            method: 'POST',
            headers: { 'content-type': `application/json` },
            body: JSON.stringify(registerAccount)
        });

        let newAccount = await resposne.json();
        localStorage.setItem('_id', newAccount._id);
        localStorage.setItem('email', newAccount.email);
        localStorage.setItem('password', newAccount.password);
        localStorage.setItem('accessToken', newAccount.accessToken);

        location.assign('./index.html')

    } catch (error) {
        console.error(error);
        alert(error);
    }



})