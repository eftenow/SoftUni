class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        quantity = Number(quantity);
        spaceRequired = Number(spaceRequired);
        if (spaceRequired > this.warehouseSpace) {
            throw new Error('Not enough space in the warehouse.')
        }
        this.products.push({ product, quantity });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`

    }

    quantityCheck(product, minimalQuantity) {
        minimalQuantity = Number(minimalQuantity);
        let currentProduct = this.products.find(x => x.product == product);

        if (!currentProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
        let checkItemQuantity = currentProduct.quantity;

        if (minimalQuantity <= checkItemQuantity) {
            return `You have enough from product ${product}.`
        }
        let difference = minimalQuantity - checkItemQuantity;
        currentProduct.quantity = minimalQuantity;
        return `You added ${difference} more from the ${product} products.`;

    }

    sellProduct(product) {
        let currentProduct = this.products.find(x => x.product == product);

        if (!currentProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        currentProduct.quantity -= 1;
        this.sales.push({ product, quantity: 1})
        return `The ${product} has been successfully sold.`
    }

    revision() {
        let result = [];
        let totalSales = this.sales.length;
        if (totalSales == 0) {
            throw new Error('There are no sales today!');
        };
        result.push(`You sold ${totalSales} products today!`) ;
        result.push(`Products in the warehouse:`) ;

        this.products.map(kvp => result.push(`${kvp.product}-${kvp.quantity} more left`))
        return result.join('\n');

    }
}
