function cityTaxes(name, population, treasury){
    let cityRecord = {
        name,
        population,
        treasury,
        taxRate : 10,
        collectTaxes(){
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent){
            this.population *= (percent / 100) + 1;
        },
        applyRecession(percent){
            this.treasury *= 1 - (percent / 100);
        }
    };

    return cityRecord;
}

const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);