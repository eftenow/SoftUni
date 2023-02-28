function loadRepos() {
	const usernameEl = document.getElementById('username');
	const loadReposBtn = document.querySelector('button')
	const reposEl = document.getElementById('repos');

	const url = 'https://api.github.com/users';

	loadReposBtn.addEventListener('click', function(){
		let searchedUsername = usernameEl.value;
		fetch(`${url}/${searchedUsername}/repos`)
		.then(res => res.json())
		.then(res => {
			reposEl.innerHTML = '';
			res.map(repo => {
				let newRepoLi = document.createElement('li');
				let repoLink = document.createElement('a');
				repoLink.href = repo.html_url;
				repoLink.textContent = repo.full_name;

				newRepoLi.appendChild(repoLink);
				reposEl.appendChild(newRepoLi);
			})
		})
	})
}