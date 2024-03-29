class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        price = Number(price);

        if (this.space == 0) {
            throw new Error("Not enough space in the cellar.");
        }
        this.wines.push({ wineName, wineType, price, paid: false });
        this.space -= 1;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle(wineName, price) {
        price = Number(price);
        const wine = this.wines.find(w => w.wineName == wineName);

        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        };

        if (wine.paid === true) {
            throw new Error(`${wineName} has already been paid.`);
        }

        wine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`
    }

    openBottle(wineName) {
        const wine = this.wines.find(w => w.wineName == wineName);

        if (!wine) {
            throw new Error("The wine, you're looking for, is not found.");
        };

        if (wine.paid === false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }

        this.wines.splice(this.wines.indexOf(wine), 1);
        return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType) {
        if (!wineType) {
            let result = [`You have space for ${this.space} bottles more.`, `You paid ${this.bill}$ for the wine.`]
            this.wines
                .sort((a, b) => a.wineName.localeCompare(b.wineName))
                .map(wine => result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid == true ? 'Has Paid' : 'Not Paid'}.`));
            return result.join('\n');
        } else{
            const wine = this.wines.find(w => w.wineType == wineType);
            if (!wine) {
                throw new Error (`There is no ${wineType} in the cellar.`)
            };
            return `${wine.wineName} > ${wine.wineType} - ${wine.paid == true ? 'Has Paid' : 'Not Paid'}.`

        }

    }

}

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision('Red'));
