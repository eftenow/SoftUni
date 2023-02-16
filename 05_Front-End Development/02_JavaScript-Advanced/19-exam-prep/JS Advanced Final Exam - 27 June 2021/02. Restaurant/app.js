class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        products.forEach(info => {
            let [productName, productQuantity, productTotalPrice] = info.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)

                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = 0;
                };
                this.stockProducts[productName] += productQuantity;
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        })
        return this.history.join('\n');
    };

    addToMenu(meal, neededProducts, price) {
        price = Number(price);
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        };

        this.menu[meal] = { products: neededProducts, price: Number(price) }
        let numberOfMeals = (Object.values(this.menu)).length;
        if (numberOfMeals === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        } else {
            return `Great idea! Now with the ${meal} we have ${numberOfMeals} meals in the menu, other ideas?`
        }

    }
    showTheMenu() {
        let result = [];
        let meals = Object.keys(this.menu);

        if (meals.length === 0) {
            return "Our menu is not ready yet, please come later...";
        }
        meals.map(meal => result.push(`${meal} - $ ${this.menu[meal].price}`));
        return result.join('\n');
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        const neededProducts = this.menu[meal].products;
        for (const productInfo of neededProducts) {
            let [product, quantity] = productInfo.split(' ');
            quantity = Number(quantity)
            let productInStock = this.stockProducts[product];

            if (!productInStock || Number(productInStock) < quantity) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            } else {
                this.stockProducts[product] -= quantity;
            }
        };

        this.budgetMoney += Number(this.menu[meal].price);
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`

    }
}