function solution(cmdInfo) {
    let ingredients = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

    function restock(ingredient, quantity) {
        ingredients[ingredient] += Number(quantity);
        return `Success`
    }

    function prepare(food, quantity) {
        let foodRecipes = {
            apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
            lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
            burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
            eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
            turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
        }
        let ingredientsNeeded = Object.entries(foodRecipes[food]);

        for (const element of ingredientsNeeded) {
            let [ingr, qtyForOne] = element
            let amountNeeded = qtyForOne * quantity;
            let amountInStock = ingredients[ingr];
            if(amountNeeded > amountInStock){
                return `Error: not enough ${ingr} in stock`
            }
        }
        ingredientsNeeded.map(ing => ingredients[ing[0]] -= Number(ing[1]) * quantity)
        return `Success`
    }

    function report() {
        return Object.keys(ingredients).map(ingr => `${ingr}=${ingredients[ingr]}`).join(' ')
    }



    function commandExecution(cmdInfo) {
        let [command, value, quantity] = cmdInfo.split(' ');

        if (command == 'restock') {
            return restock(value, quantity);
        }
        if (command == 'prepare') {
            return prepare(value, quantity);
        }
        if (command == 'report') {
            return report();
        }
    }
    return commandExecution;
}



let manager = solution();

console.log (manager ("prepare turkey 1"));
console.log (manager ("restock protein 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("report"));


