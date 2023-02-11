window.addEventListener("load", solve);

function solve() {
  const firstNameEl = document.getElementById('first-name');
  const lastNameEl = document.getElementById('last-name');
  const ageEl = document.getElementById('age');
  const genderEl = document.getElementById('genderSelect');
  const dishDescriptionEl = document.getElementById('task');
  const formBtn = document.getElementById('form-btn');
  const inProgressEl = document.getElementById('in-progress')
  const finishedEl = document.getElementById('finished');
  const progressCounter = document.getElementById('progress-count');

  formBtn.addEventListener('click', function () {
    if (!firstNameEl.value || !lastNameEl.value || !ageEl.value || !dishDescriptionEl.value) {
      return;
    }
    const inProgress = document.createElement('li');
    inProgress.className = 'each-line';
    const innerArticle = document.createElement('article');

    const fullName = document.createElement('h4');
    fullName.textContent =  `${firstNameEl.value} ${lastNameEl.value}`;

    const ageAndGender = document.createElement('p');
    ageAndGender.textContent = `${genderEl.value}, ${ageEl.value}`;

    const dishDescription = document.createElement('p');
    dishDescription.textContent = `Dish description: ${dishDescriptionEl.value}`;

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn'
    completeBtn.textContent = 'Mark as complete';

    innerArticle.appendChild(fullName);
    innerArticle.appendChild(ageAndGender);
    innerArticle.appendChild(dishDescription);

    inProgress.appendChild(innerArticle);
    inProgress.appendChild(editBtn);
    inProgress.appendChild(completeBtn);

    inProgressEl.appendChild(inProgress);

    let editFirstName = firstNameEl.value;
    let editLastName = lastNameEl.value;
    let editAge = ageEl.value;
    let editDishDescription = dishDescriptionEl.value;

    firstNameEl.value = '';
    lastNameEl.value = '';
    ageEl.value = '';
    dishDescriptionEl.value = '';
    let newCount = Number(progressCounter.textContent) + 1;
    progressCounter.textContent = newCount;

    editBtn.addEventListener('click', function () {
      let newCount = Number(progressCounter.textContent) - 1;
      progressCounter.textContent = newCount;
      inProgress.remove();
      firstNameEl.value = editFirstName;
      lastNameEl.value = editLastName;
      ageEl.value = editAge;
      dishDescriptionEl.value = editDishDescription;
    })

    completeBtn.addEventListener('click', function() {
      let newCount = Number(progressCounter.textContent) - 1;
      progressCounter.textContent = newCount;

      inProgress.remove()
      let finished = document.createElement('li');
      finished.className = 'each-line';
      
      finished.appendChild(innerArticle);
      
      const clearBtn = document.getElementById('clear-btn');
      clearBtn.addEventListener('click', function(){
        finishedEl.textContent = '';
      })

      finishedEl.appendChild(finished);
    })
  })

}
