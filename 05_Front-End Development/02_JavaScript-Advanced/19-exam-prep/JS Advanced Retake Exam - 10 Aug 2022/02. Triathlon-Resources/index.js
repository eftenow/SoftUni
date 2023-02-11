class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`
        }
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) {
            `${participantName} is not in the current participants list`
        }
        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        let completedCount = Math.round(condition / 30);
        let participantGender = this.participants[participantName];

        if (completedCount < 3) {
            return `${participantName} could only complete ${completedCount} of the disciplines`;
        } else {
            this.listOfFinalists.push({ participantName, participantGender });
            return `Congratulations, ${participantName} finished the whole competition`
        }

    }

    rewarding(participantName) {
        const participant = this.listOfFinalists.find(p => p.participantName == participantName);
        if (!participant) {
            return `${participantName} is not in the current finalists list`;
        } else {
            return `${participantName} was rewarded with a trophy for his performance`;
        }

    }

    showRecord(criteria) {
        if (this.listOfFinalists.length == 0) {
            return`There are no finalists in this competition`;
        }

        if (criteria == 'male' || criteria == 'female') {
            let firstFinalist = this.listOfFinalists.find(finalist => finalist.participantGender == criteria);
            if (!firstFinalist) {
                return `There are no ${criteria}'s that finished the competition`;
            } else{
                return `${firstFinalist.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }


        } else {
            let result = [`List of all ${this.competitionName} finalists:`];
            this.listOfFinalists.map(finalist => result.push(finalist.participantName));
            return result.join('\n');
        };

    }
}
