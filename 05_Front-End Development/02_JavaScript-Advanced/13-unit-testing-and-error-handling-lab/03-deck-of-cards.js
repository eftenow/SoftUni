function printDeckOfCards(cards) {
    function createCard(card) {
        let [cardFace, cardSuit] = [card.slice(0, card.length - 1), card[card.length - 1]]
        const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        const validSuits = ["S", "H", "D", "C"];

        if (validFaces.indexOf(cardFace) === -1 || validSuits.indexOf(cardSuit) === -1) {
            return undefined;
        }

        switch (cardSuit) {
            case 'S': cardSuit = "\u2660"; break;
            case 'H': cardSuit = "\u2665"; break;
            case 'D': cardSuit = "\u2666"; break;
            case 'C': cardSuit = "\u2663"; break;
        }

        return cardFace + cardSuit;
    }
    const validCards = [];

    for (const cardInfo of cards) {
        const newCard = createCard(cardInfo);
        if (newCard == undefined){
            console.log(`Invalid card: ${cardInfo}`);
            return;
        }
        validCards.push(newCard);
    }
    console.log(validCards.join(' '));


}

printDeckOfCards(['5S', '3D', 'QD', '1C'])