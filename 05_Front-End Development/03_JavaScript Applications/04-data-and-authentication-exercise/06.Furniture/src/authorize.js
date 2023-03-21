const guestBtns = document.getElementById('guest');

const buttonSection = document.querySelector('nav')

const guest = document.getElementById('guest');
const user = document.createElement('div');
user.className = 'user';


const logoutBtn = document.createElement('a');
logoutBtn.textContent = 'Logout';
logoutBtn.href = "javascript:void(0)";
user.appendChild(logoutBtn);
buttonSection.appendChild(user);

export function authorize() {
    if (localStorage.user) {
        console.log('LOGGED ');
        user.style.display = 'inline';
        guest.style.display = 'none';

    } else {
        console.log('NOT LOGGED');
        user.style.display = 'none';
        guest.style.display = 'inline';

    }
}


logoutBtn.addEventListener('click', () =>{
    localStorage.clear();
    authorize();
})