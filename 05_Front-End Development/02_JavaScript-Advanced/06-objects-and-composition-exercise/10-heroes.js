function solve() {
    return {
        mage: (heroName) => {
            let hero = {
                name : heroName,
                health: 100,
                mana: 100,
                cast: (spellName) => {
                    hero.mana -= 1;
                    console.log(`${heroName} cast ${spellName}`);
                }
            };
            return hero;
        },
        fighter: (heroName) => {
            let hero = {
                name : heroName,
                health : 100,
                stamina : 100,
                fight : () => {
                    hero.stamina--;
                    console.log(`${heroName} slashes at the foe!`);
                }
            }
            return hero;
        }
        
    }
}