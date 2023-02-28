function loadRepos() {
   const resultSecton = document.getElementById('res');
   const loadBtn = document.querySelector('button');
   const url = 'https://api.github.com/users/testnakov/repos';

   loadBtn.addEventListener('click', () => {
      fetch(url)
      .then(result => result.json())
      .then(result => resultSecton.textContent = JSON.stringify(result))
      .catch(error => console.log(error));
   })

}