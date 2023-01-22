function toggle() {
    let showMoreElement = document.getElementsByClassName('button')[0];
    let extraTextElement = document.getElementById('extra');

    if (showMoreElement.textContent == 'More'){
        showMoreElement.textContent = 'Less';
        extraTextElement.style.display = 'block';
    } else {
        showMoreElement.textContent = 'More';
        extraTextElement.style.display = 'none';
    }

}