async function solution() {
    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;
    const articleInfoUrl = `http://localhost:3030/jsonstore/advanced/articles/details/`;
    const fetchResponse = await fetch(url);
    let data;

    if (fetchResponse.ok) {
        data = await fetchResponse.json();
    } else {
        console.log(data.error);
    }

    const articlesResponse = await fetch(articleInfoUrl);
    const articles = await articlesResponse.json();
    console.log(articles);


    async function getArticleInfo(articleId) {
        const hiddenInfo = await ((await fetch(`${articleInfoUrl}${articleId}`)).json());
        return hiddenInfo;

    }

    data.forEach(async article => {
        const id = article._id;
        const title = article.title;
        const articleContent = await getArticleInfo(id);
        console.log(articleContent.content);


        const wrapper = document.createElement('div');
        wrapper.className = 'accordion';

        const head = document.createElement('div');
        head.className = 'head';

        const headTitle = document.createElement('span');
        headTitle.textContent = title;

        const moreBtn = document.createElement('button');
        moreBtn.className = 'button';
        moreBtn.setAttribute('id', id);
        moreBtn.textContent = 'More';

        const extra = document.createElement('div');
        extra.className = 'extra';

        const hiddenText = document.createElement('p');
        hiddenText.textContent = articleContent.content;
        extra.appendChild(hiddenText)


        head.append(headTitle, moreBtn);
        wrapper.append(head, extra);
        document.querySelector('body').appendChild(wrapper);

        moreBtn.addEventListener('click', function () {

            extra.style.display = extra.style.display === 'block'
                ? 'none'
                : 'block';

            moreBtn.textContent = moreBtn.textContent === 'More'
                ? 'less'
                : 'More'
        })






    });

}

solution()


