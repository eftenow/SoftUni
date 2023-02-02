function solve(juices){
    let filledBottles = new Map;
    let juiceQunatities = new Map;

    juices.forEach(juiceData => {
        let [flavor, quantity] = juiceData.split(' => ');
        quantity = Number(quantity);
        if (!juiceQunatities.has(flavor)){
            juiceQunatities.set(flavor, quantity)
        } else{
            let newQuantity = juiceQunatities.get(flavor) + quantity;
            juiceQunatities.set(flavor, newQuantity);
        }
        
        if (juiceQunatities.get(flavor) >= 1000) {
            let bottles = Math.floor(juiceQunatities.get(flavor) / 1000 );
            let newQuantity = juiceQunatities.get(flavor) % 1000;
            juiceQunatities.set(flavor, newQuantity)
            if (!filledBottles.has(flavor)){
                filledBottles.set(flavor, bottles);
            } else{
                let newBottlesAmount = filledBottles.get(flavor) + bottles
                filledBottles.set(flavor, newBottlesAmount);
            };
        }
    });
    for (const [juice, quantity] of filledBottles) {
        console.log(`${juice} => ${quantity}`);
        
    }
}

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])
