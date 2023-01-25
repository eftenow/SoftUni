function create(words) {
   let contentElement = document.getElementById('content');
   const sections = Array.from(words);
   const showOnClick = (ev) => {
      let childPar = ev.target.children[0];
      childPar.style.display = 'inline';
   }
   sections.forEach(section => {
      let newDiv = document.createElement('div');
      let newPar = document.createElement('p');
      newPar.style.display = 'none';
      newPar.textContent = section;
      newDiv.appendChild(newPar);
      newDiv.addEventListener('click', showOnClick)
      contentElement.appendChild(newDiv);


   });
}