function solve(ticketsInfo, sortBy){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

    }
    const tickets = [];
    ticketsInfo.forEach(ticket => {
        const [_destination, _price, _status] = ticket.split('|');
        tickets.push(new Ticket(_destination, Number(_price), _status));
    });
    if (sortBy == 'price'){
        return tickets.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
    }
    return tickets.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    
}

solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price');