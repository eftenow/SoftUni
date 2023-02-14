class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    };

    addPlant(plantName, spaceRequired) {
        spaceRequired = Number(spaceRequired);

        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        };

        this.spaceAvailable -= spaceRequired;
        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        quantity = Number(quantity);
        const plant = this.plants.find(plant => plant.plantName == plantName);

        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } else if (plant.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`);
        } else if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        };
        
        plant.quantity += quantity;
        plant.ripe = true;

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName) {
        const plant = this.plants.find(plant => plant.plantName == plantName);
        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } else if (plant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        };

        this.storage.push({ plantName, quantity: plant.quantity });
        this.spaceAvailable += plant.spaceRequired;
        this.plants.splice(this.plants.indexOf(plant), 1);
        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let firstLine = `The garden has ${this.spaceAvailable} free space left.`;
        let secondLine = `Plants in the garden: `;
        let thirdLine =  `Plants in storage: `;

        let plants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName)).map(plant => plant.plantName);    
        secondLine += plants.join(', ');

        if (this.storage.length == 0){
            thirdLine += `The storage is empty.`;
        } else{
            let storagePlants = [];
            this.storage.map(plant => storagePlants.push(`${plant.plantName} (${plant.quantity})`));
            thirdLine += storagePlants.join(', '); 
        }

        return [firstLine, secondLine, thirdLine].join('\n');
          
    }

}
