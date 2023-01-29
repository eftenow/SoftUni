function getArticleGenerator(articles) {
    let listOfArticles = Array.from(articles);
    

    function showNext() {
        let currentArticle = document.createElement('article');
        currentArticle.textContent = listOfArticles.shift();

        
        if (currentArticle.textContent){
            document.getElementById('content').appendChild(currentArticle);
        }
        
    }

    return showNext

}
