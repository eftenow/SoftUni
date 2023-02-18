class VegetableStore{
    constructor(owner, location){
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables (vegetables){
        vegetables.forEach(vegInfo => {
            let [type, quantity, price] = vegInfo.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            let vegetable = this.availableProducts.find(v => v.type == type);
            if (vegetable){
                vegetable.quantity += quantity;
                vegetable.price = vegetable.price < price ? price : vegetable.price;
            } else{
                this.availableProducts.push({type, quantity, price});
            }
        });
        let addedVegetables = Array.from(new Set(vegetables.map(veg => veg.split(' ')[0])));
        
        return `Successfully added ${addedVegetables.join(', ')}`
    };

    buyingVegetables(selectedProducts){
        let totalPrice = 0;
        selectedProducts.forEach(productInfo => {
            let [type, quantity] = productInfo.split(' ');
                let product = this.availableProducts.find(p => p.type == type);
                quantity = Number(quantity)

                if (!product){
                    throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                } else if (quantity > Number(product.quantity)){
                    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                } else{
                    totalPrice += Number(product.price) * quantity;
                    product.quantity -= quantity;
                }
        });
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    };

    rottingVegetable(type, quantity){
        let product = this.availableProducts.find(p => p.type == type);
        quantity = Number(quantity);
        if (!product){
            throw new Error(`${type} is not available in the store.`);
        } else if (quantity >= Number(product.quantity)) {
            product.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        } else{
            product.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }
    }

    revision(){
        let result = ["Available vegetables:"];
        this.availableProducts
        .sort((a, b) => Number(a.price) - Number(b.price))
        .map(product => result.push(`${product.type}-${product.quantity}-$${product.price}`));
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)

        return result.join('\n');
    }
}


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

console.log(vegStore.buyingVegetables(["Beans 11", "Celery 1.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.revision());