class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        const price = this.priceForTheCamp[condition];
        const participant = this.listOfParticipants.find(p => p.name == name);

        if (!price) {
            throw new Error("Unsuccessful registration at the camp.");
        } else if (participant) {
            return `The ${name} is already registered at the camp.`
        } else if (money < price) {
            return `The money is not enough to pay the stay at the camp.`;
        } else {
            this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
            return `The ${name} was successfully registered.`;
        };
    }

    unregisterParticipant(name) {
        const participant = this.listOfParticipants.find(p => p.name == name);

        if (!participant) {
            throw new Error(`The ${name} is not registered in the camp.`)
        } else {
            this.listOfParticipants.splice(this.listOfParticipants.indexOf(participant), 1);
            return `The ${name} removed successfully.`
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        const firstParticipant = this.listOfParticipants.find(p => p.name == participant1);

        if (typeOfGame == `Battleship`) {
            if (!firstParticipant) {
                throw new Error(`Invalid entered name/s.`);
            }
            firstParticipant.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
        else if (typeOfGame == 'WaterBalloonFights') {
            const secondParticipant = this.listOfParticipants.find(p => p.name == participant2);

            if (!firstParticipant || !secondParticipant) {
                throw new Error(`Invalid entered name/s.`);
            } else if (firstParticipant.condition !== secondParticipant.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (firstParticipant.power > secondParticipant.power) {
                firstParticipant.wins += 1;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if (firstParticipant.power < secondParticipant.power) {
                secondParticipant.wins += 1;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`
            }
        }
    }

    toString(){
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`]
        this.listOfParticipants
        .sort((a, b) => b.wins - a.wins)
        .map(p => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));
        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());