function solve(data) {
    let lowestPriceProducts = {}
    for (const token of data) {
        let [city, product, price] = token.split(' | ');
        if (!lowestPriceProducts[product]) {
            lowestPriceProducts[product] = [Number(price), city];
        } else {
            if (lowestPriceProducts[product][0] > Number(price)) {
                lowestPriceProducts[product] = [Number(price), city];
            }
        }
    }
    for (const product in lowestPriceProducts) {
        let productPrice = lowestPriceProducts[product][0];
        let productCity = lowestPriceProducts[product][1];
        console.log(`${product} -> ${productPrice} (${productCity})`);

    }
}


solve(
    ['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)