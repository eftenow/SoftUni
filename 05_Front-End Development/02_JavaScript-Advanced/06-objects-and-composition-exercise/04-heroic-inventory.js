function solve(heroesData){
    let result = []
    for (const heroData of heroesData) {
        let [heroName, heroLevel, heroItems] = heroData.split(' / ')
        heroItems = heroItems ? heroItems.split(', ') : [];
        let hero = {
            name: heroName,
            level: Number(heroLevel),
            items: heroItems,
        }
        result.push(hero);
    }
    return JSON.stringify(result);
}


console.log(solve(['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));