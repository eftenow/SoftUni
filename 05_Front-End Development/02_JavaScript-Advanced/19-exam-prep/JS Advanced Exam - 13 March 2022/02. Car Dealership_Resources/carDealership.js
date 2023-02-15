class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        console.log(typeof(horsepower));
        if (!model || typeof(horsepower) != 'number' || horsepower < 0  || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }
        price = Number(price);
        mileage = Number(mileage);
        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        let car = this.availableCars.find(c => c.model == model);

        if (!car) {
            throw new Error(`${model} was not found!`)
        }

        let difference = Number(car.mileage) - Number(desiredMileage);
        if (0 < difference && difference <= 40000) {
            car.price *= 0.95;
        } else if (difference > 40000) {
            car.price *= 0.90;
        }

        this.soldCars.push({ model: car.model, horsepower: car.horsepower, soldPrice: car.price })
        this.availableCars.splice(this.availableCars.indexOf(car), 1);
        this.totalIncome += car.price;
        return `${model} was sold for ${car.price.toFixed(2)}$`

    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return "There are no available cars";
        }

        let result = ['-Available cars:'];
        this.availableCars.map(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`))
        return result.join('\n');
    }

    salesReport(criteria) {
        let result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`, `-${this.soldCars.length} cars sold:`];

        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error("Invalid criteria!")
        }

        if (criteria == 'model') {
            this.soldCars
                .sort((a, b) => a.model.localeCompare(b.model))
                .map(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`))
        } else{
            this.soldCars
                .sort((a, b) => Number(b.horsepower) - Number(a.horsepower))
                .map(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`))
        }


        return result.join('\n');


    }
}


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 0, 0, 0);
dealership.addCar('Audi', 200, 3500, 190000);
dealership.addCar('BMW', 330, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('BMW', 230000);
dealership.sellCar('Audi', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));