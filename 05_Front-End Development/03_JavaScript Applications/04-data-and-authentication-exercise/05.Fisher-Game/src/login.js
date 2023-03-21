const loginForm = document.querySelector('main form');
const url = 'http://localhost:3030/users/login';

loginForm.addEventListener('submit', async (ev) =>{
    ev.preventDefault();
    const form = new FormData(ev.target);
    let email = form.get('email');
    let password = form.get('password');

    let loginAccount = {email, password};
    
    try {
        let resposne = await fetch(url, {
            method : 'POST',
            headers: {'content-type' : `application/json`},
            body: JSON.stringify(loginAccount)
        });
        if (resposne.status !== 200){
            throw new Error('Invalid username or password!')
        }

        let loggedAccount = await resposne.json();

        localStorage.setItem('_id', loggedAccount._id);
        localStorage.setItem('email', loggedAccount.email);
        localStorage.setItem('password', loggedAccount.password);
        localStorage.setItem('accessToken', loggedAccount.accessToken);
    
        location.assign('./index.html')
    } catch (error) {
        console.error(error);
        alert(error);
    }

})