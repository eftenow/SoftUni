window.addEventListener("load", solve);

function solve() {
  const firstNameEl = document.getElementById('first-name');
  const lastNameEl = document.getElementById('last-name');
  const ageEl = document.getElementById('age');
  const titleEl = document.getElementById('story-title');
  const genreEl = document.getElementById('genre')
  const storyTextEl = document.getElementById('story');
  const formBtn = document.getElementById('form-btn');
  const previewListEl = document.getElementById('preview-list');

  formBtn.addEventListener('click', function (ev) {
    if (!firstNameEl.value || !lastNameEl.value || !ageEl.value || !titleEl.value || !storyTextEl.value) {
      return;
    };
    const storyInfoLi = document.createElement('li');
    storyInfoLi.className = 'story-info';
    const innerArticle = document.createElement('article');

    const fullName = document.createElement('h4');
    const age = document.createElement('p');
    const title = document.createElement('p');
    const genre = document.createElement('p');
    const storyText = document.createElement('p');

    fullName.textContent = `Name: ${firstNameEl.value} ${lastNameEl.value}`
    age.textContent = `Age: ${ageEl.value}`;
    title.textContent = `Title: ${titleEl.value}`;
    genre.textContent = `Genre: ${genreEl.value}`;
    storyText.textContent = storyTextEl.value;

    innerArticle.appendChild(fullName);
    innerArticle.appendChild(age);
    innerArticle.appendChild(title);
    innerArticle.appendChild(genre);
    innerArticle.appendChild(storyText);

    let editFirstName = firstNameEl.value;
    let editLastName = lastNameEl.value;
    let editAge = ageEl.value;
    let editTitle = titleEl.value;
    let editStoryText = storyTextEl.value;
    firstNameEl.value = '';
    lastNameEl.value = '';
    ageEl.value = '';
    titleEl.value = '';
    storyTextEl.value = '';
    formBtn.disabled = true;

    const saveBtn = document.createElement('button');
    saveBtn.className = 'save-btn';
    saveBtn.textContent = 'Save Story';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit Story';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete Story';

    storyInfoLi.appendChild(innerArticle);
    storyInfoLi.appendChild(saveBtn);
    storyInfoLi.appendChild(editBtn);
    storyInfoLi.appendChild(deleteBtn);
    previewListEl.appendChild(storyInfoLi)

    editBtn.addEventListener('click', function (ev) { //EDIT BUTTON
      storyInfoLi.remove();
      firstNameEl.value = editFirstName;
      lastNameEl.value = editLastName;
      ageEl.value = editAge;
      titleEl.value = editTitle;
      storyTextEl.value = editStoryText;
      formBtn.disabled = false;
    })

    saveBtn.addEventListener('click', function(ev){ //SAVE BUTTON
      const mainSectionEl = document.getElementById('main');
      mainSectionEl.innerHTML = '';
      let mainSectionHeader = document.createElement('h1');
      mainSectionHeader.textContent = "Your scary story is saved!";
      mainSectionEl.appendChild(mainSectionHeader);
    })

    deleteBtn.addEventListener('click', function(ev){
      storyInfoLi.remove();
      formBtn.disabled = false;
    })

  })

}
