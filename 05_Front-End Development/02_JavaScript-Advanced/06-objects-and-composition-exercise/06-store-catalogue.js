function solve(catalogueItems) {
    let catalogue = {};
    for (const itemInfo of catalogueItems) {
        let [itemName, itemPrice] = itemInfo.split(' : ');
        let firstLetter = itemName[0];
        if (!catalogue[firstLetter]) {
            catalogue[firstLetter] = []
        }
        catalogue[firstLetter].push([itemName, itemPrice])
    }
    let sortable = [];
    for (const item in catalogue) {
        gg = catalogue[item];
        sortable.push([item, catalogue[item]])
    }
    sortable.sort(function (a, b) {
        return a[0].toLowerCase().localeCompare(b[0].toLowerCase())
    })
    for (const token of sortable) {
        let letter = token[0];
        let items = token[1].sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()));
        console.log(letter);
        for (const item of items) {
            let itemName = item[0];
            let itemPrice = item[1];
            console.log(`  ${itemName}: ${itemPrice}`);
        }


    }
}


solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])