window.addEventListener('load', solve);

function solve() {
    const genreEl = document.getElementById('genre');
    const nameEl = document.getElementById('name');
    const authorEl = document.getElementById('author');
    const dateEl = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    const songCollection = document.getElementsByClassName('all-hits-container')[0];
    const savedCollection = document.getElementsByClassName('saved-container')[0];

    addBtn.addEventListener('click', function (ev) {
        ev.preventDefault();
        if (
            !genreEl.value || !nameEl.value || !authorEl.value || !dateEl.value) {
            return;
        };

        const wrapper = document.createElement('div');
        wrapper.className = 'hits-info';

        const img = document.createElement('img');
        img.src = './static/img/img.png';

        const genre = document.createElement('h2');
        genre.textContent = `Genre: ${genreEl.value}`;
        genreEl.value = '';

        const name = document.createElement('h2');
        name.textContent = `Name: ${nameEl.value}`;
        nameEl.value = '';

        const author = document.createElement('h2');
        author.textContent = `Author: ${authorEl.value}`;
        authorEl.value = '';

        const date = document.createElement('h3');
        date.textContent = `Date: ${dateEl.value}`;
        dateEl.value = '';

        const saveSongBtn = document.createElement('button');
        saveSongBtn.className = 'save-btn';
        saveSongBtn.textContent = 'Save song';

        const likeBtn = document.createElement('button');
        likeBtn.className = 'like-btn';
        likeBtn.textContent = 'Like song';

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';

        wrapper.appendChild(img);
        wrapper.appendChild(genre);
        wrapper.appendChild(name);
        wrapper.appendChild(author);
        wrapper.appendChild(date);
        wrapper.appendChild(saveSongBtn);
        wrapper.appendChild(likeBtn);
        wrapper.appendChild(deleteBtn);
        songCollection.appendChild(wrapper);

        saveSongBtn.addEventListener('click', function(){
            wrapper.removeChild(saveSongBtn);
            wrapper.removeChild(likeBtn);
            savedCollection.appendChild(wrapper);

        })

        likeBtn.addEventListener('click', function(){
            const totalLikesEl = document.querySelector('#total-likes .likes p');
            let content = (totalLikesEl.textContent).split(' ');
            let likes = Number(content[content.length - 1]) + 1;
            content.splice(content.length - 1, 1);
            content.push(likes);
            document.querySelector('#total-likes .likes p').textContent = content.join(' ');
            likeBtn.disabled = true; 
        })

        deleteBtn.addEventListener('click', function(){
            wrapper.remove();
        })
    })
}