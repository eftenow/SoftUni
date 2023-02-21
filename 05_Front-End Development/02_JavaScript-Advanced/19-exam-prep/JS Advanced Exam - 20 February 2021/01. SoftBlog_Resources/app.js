function solve(){
   const createBtn = document.querySelector('.create');
   const creatorEl = document.getElementById('creator');
   const titleEl = document.getElementById('title');
   const categoryEl = document.getElementById('category');
   const contentEl = document.getElementById('content');
   const mainSection = document.querySelector('main section');
   
   createBtn.addEventListener('click', function (ev) {
      ev.preventDefault();
      const wrapper = document.createElement('article');

      const title = document.createElement('h1');
      const category = document.createElement('p'); 
      const creator = document.createElement('p'); 
      const content = document.createElement('p'); 

      const strongCategory = document.createElement('strong');
      const strongCreator = document.createElement('strong');
      strongCategory.textContent = categoryEl.value;
      strongCreator.textContent = creatorEl.value

      const archiveTitle = document.createElement('li');
      archiveTitle.textContent = titleEl.value;

      title.textContent = titleEl.value;
      category.textContent = 'Category: ';
      category.appendChild(strongCategory);
      creator.textContent = 'Creator: ';
      creator.appendChild(strongCreator);
      content.textContent = contentEl.value;

      const btnSection = document.createElement('div');
      btnSection.className = 'buttons';

      const deleteBtn = document.createElement('button');
      const archiveBtn = document.createElement('button');
      deleteBtn.classList.add('btn', 'delete');
      archiveBtn.classList.add('btn', 'archive');
      deleteBtn.textContent = 'Delete';
      archiveBtn.textContent = 'Archive';

      btnSection.appendChild(deleteBtn);
      btnSection.appendChild(archiveBtn);

      wrapper.appendChild(title);
      wrapper.appendChild(category);
      wrapper.appendChild(creator);
      wrapper.appendChild(content);
      wrapper.appendChild(btnSection);

      mainSection.appendChild(wrapper);

      deleteBtn.addEventListener('click', function(ev){
         ev.target.parentNode.parentNode.remove();
      })

      archiveBtn.addEventListener('click', function(ev){
         ev.target.parentNode.parentNode.remove();
         
         const archiveSection = document.querySelector('.archive-section ol');
         archiveSection.appendChild(archiveTitle);

         const archiveElements = archiveSection.querySelectorAll('li');
         const sortedElements = Array.from(archiveElements).sort((a, b) => a.textContent.localeCompare(b.textContent));
         archiveSection.textContent = '';
         sortedElements.map(el => archiveSection.appendChild(el));
      })

   })
  }
