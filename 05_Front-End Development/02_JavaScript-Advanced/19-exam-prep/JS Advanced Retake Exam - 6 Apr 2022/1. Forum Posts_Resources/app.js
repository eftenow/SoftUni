window.addEventListener("load", solve);

function solve() {
  const titleEl = document.getElementById("post-title");
  const categoryEl = document.getElementById("post-category");
  const contentEl = document.getElementById("post-content");
  const publishBtn = document.getElementById('publish-btn');
  const reviewListEl = document.getElementById('review-list');
  const publishedListEl = document.getElementById("published-list");
  const clearBtn = document.getElementById("clear-btn");

  publishBtn.addEventListener('click', function () {
    if (!titleEl.value || !categoryEl.value || !contentEl.value ) {
      console.log('asd');
      return;
    };

    const newReviewLi = document.createElement('li');
    newReviewLi.className = 'rpost';

    const innerArticle = document.createElement('article');

    const title = document.createElement('h4');
    title.textContent = titleEl.value;
    let editTitle = titleEl.value;
    titleEl.value = '';

    const category = document.createElement('p');
    category.textContent = `Category: ${categoryEl.value}`;
    let editCategory = categoryEl.value;
    categoryEl.value = '';

    const content = document.createElement('p');
    content.textContent = `Content: ${contentEl.value}`;
    let editContent = contentEl.value;
    contentEl.value = '';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');

    const approveBtn = document.createElement('button');
    approveBtn.textContent = 'Approve';
    approveBtn.classList.add('action-btn');
    approveBtn.classList.add('approve');

    innerArticle.appendChild(title);
    innerArticle.appendChild(category);
    innerArticle.appendChild(content);

    newReviewLi.appendChild(innerArticle);
    newReviewLi.appendChild(editBtn);
    newReviewLi.appendChild(approveBtn);

    reviewListEl.appendChild(newReviewLi);

    editBtn.addEventListener('click', function () {
      newReviewLi.remove();
      titleEl.value = editTitle;
      categoryEl.value = editCategory;
      contentEl.value = editContent;
    });

    approveBtn.addEventListener('click', function (){
      newReviewLi.removeChild(approveBtn);
      newReviewLi.removeChild(editBtn);
      publishedListEl.appendChild(newReviewLi);
    })

    clearBtn.addEventListener('click', function(){
      publishedListEl.removeChild(newReviewLi);
    })
    
  })


}
