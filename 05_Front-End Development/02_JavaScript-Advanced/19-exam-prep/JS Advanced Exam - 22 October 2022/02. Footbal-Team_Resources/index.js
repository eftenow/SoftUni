class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let newInvitations = []; // MIGHT NEED TO CHANGE LATER
        footballPlayers.forEach(playerData => {
            let [name, age, playerValue] = playerData.split('/');
            const playerExists = this.invitedPlayers.find(p => p.name == name);
            if (playerExists && playerValue > playerExists.playerValue) {
                playerExists.playerValue = playerValue;
            } else {
                this.invitedPlayers.push({ name, age, playerValue });
                newInvitations.push(name);
            }
        });
        return `You successfully invite ${newInvitations.join(', ')}.`
    };

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        const player = this.invitedPlayers.find(p => p.name == name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`)
        };

        if (player.playerValue > playerOffer) {
            const priceDifference = player.playerValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
        };

        playerExists.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    };

    ageLimit(name, age) {
        const playerExists = this.invitedPlayers.find(p => p.name == name);

        if (!playerExists) {
            throw new Error(`${name} is not invited to the selection list!`)
        };

        if (playerExists.age >= age) {
            return `${name} is above age limit!`
        };

        const difference = age - playerExists.age;

        if (difference < 5) {
            return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`
        } else {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }

    };

    transferWindowResult() {
        let result = ['Players list:']
        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))
            .forEach(player => { result.push([`Player ${player.name}-${player.playerValue}`]) });

        return result.join('\n');
    }

}