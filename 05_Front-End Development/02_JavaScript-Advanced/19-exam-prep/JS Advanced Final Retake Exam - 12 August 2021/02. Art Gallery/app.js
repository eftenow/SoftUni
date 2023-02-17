class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle( articleModel, articleName, quantity ){
        articleModel = articleModel.toLowerCase();
        const articleFee = this.possibleArticles[articleModel];
        const article = this.listOfArticles.find(a => a.articleName == articleName);

        if (!articleFee){
            throw new Error("This article model is not included in this gallery!");
        } else if (article && article.articleModel == articleModel) {
            article.quantity += quantity;
        } else{
            this.listOfArticles.push({articleModel, articleName, quantity});
        };
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        
    };

    inviteGuest ( guestName, personality){
        const guest = this.guests.find(g => g.guestName == guestName);
        
        if (guest) {
            throw new Error(`${guestName} has already been invited.`)
        };

        let points = 50;

        if (personality == 'Vip'){
            points = 500;
        } else if (personality == 'Middle'){
            points = 250;
        }

        this.guests.push({guestName, points, purchaseArticle: 0});
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle ( articleModel, articleName, guestName){
        const articleFee = this.possibleArticles[articleModel];
        const article = this.listOfArticles.find(a => a.articleName == articleName);
        const validArticle = this.listOfArticles.find(a => a.articleModel == articleModel && a.articleName == articleName);
        const guest = this.guests.find(g => g.guestName == guestName);

        if (!validArticle){
            throw new Error("This article is not found.");
        } else if (article.quantity == 0){
            return `The ${articleName} is not available.`;
        } else if (!guest){
            return "This guest is not invited.";
        }
        
        if (articleFee > guest.points){
            return "You need to more points to purchase the article.";
        } else{
            guest.points -= articleFee;
            guest.purchaseArticle += 1;
            article.quantity -= 1;
            return `${guestName} successfully purchased the article worth ${articleFee} points.`
        }

    }

    showGalleryInfo (criteria){
        let result = [];

        if (criteria == 'article'){
            result.push('Articles information:');
            this.listOfArticles.map(a => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`))
        } else if (criteria == 'guest'){
            result.push("Guests information:");
            this.guests.map(g => result.push(`${g.guestName} - ${g.purchaseArticle}`))
        }
        
        return result.join('\n');
    }
}


const artGallery = new ArtGallery('Curtis Mayfield'); 

console.log(artGallery.addArticle('PiCtUrE', 'Mona Liza', 2));
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('item', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Middle');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.inviteGuest('Peterr', 'Norm');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));