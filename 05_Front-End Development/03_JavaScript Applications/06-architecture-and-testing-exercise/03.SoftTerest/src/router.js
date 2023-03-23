export function initialize(views) {
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');

    nav.addEventListener('click', redirect);

    let context = {
        showSection,
        goTo,
        updateNav
    }

    return context;

    function showSection(section) {
        main.replaceChildren(section);
    }


    function redirect(ev) {
        ev.preventDefault();
        let target = ev.target;
        if (target.tagName == 'IMG') {
            target = ev.target.parentElement;
        };

        if (target.tagName == 'A') {
            let location = target.id;
            goTo(location);
        }
    }

    function goTo(location, id) {
        if (typeof views[location] == 'function') {
            views[location](context, id);
        }
    }

    function updateNav() {
        const user = localStorage.getItem('user');
        if (user){
            Array.from(nav.querySelectorAll('.guest')).map(x => x.style.display = 'none');
            Array.from(nav.querySelectorAll('.user')).map(x => x.style.display = 'block');
        } else{
            Array.from(nav.querySelectorAll('.guest')).map(x => x.style.display = 'block');
            Array.from(nav.querySelectorAll('.user')).map(x => x.style.display = 'none');

        }
    }
}