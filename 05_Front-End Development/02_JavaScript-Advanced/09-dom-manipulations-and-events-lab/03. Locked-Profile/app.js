function lockedProfile() {
    const btns = Array.from(document.querySelectorAll('button'));
    btns.forEach(btn => btn.addEventListener('click', showMoreInfo));

    function showMoreInfo(ev) {
        const locked = ev.target.parentNode.querySelector('input[value=lock]');
        const selectedBtn = ev.target;
        console.log(selectedBtn);
        console.log(locked);
        if (!locked.checked){
            const hiddenInfo = locked.parentNode.querySelector('.profile div');

            if (selectedBtn.textContent == 'Hide it'){
                hiddenInfo.style.display = 'none';
                selectedBtn.textContent = 'Show more'
            }
            else{
            selectedBtn.textContent = 'Hide it'
            hiddenInfo.style.display = 'block';
            }
        }
    }
}
