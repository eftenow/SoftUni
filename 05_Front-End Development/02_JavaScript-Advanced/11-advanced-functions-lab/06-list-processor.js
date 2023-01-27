function solve(input) {
    let collection = [];

    const processes = {
        add: (string) => collection.push(string),
        remove: (string) => collection = collection.filter(str => str != string),
        print: () => console.log(collection.join(',')),
    }

    function executeCommands() {
        input.map(command =>{
            let [commandType, commandText] = command.split(' ');
            processes[commandType](commandText);
        })
    }
    executeCommands.call(processes)
}


solve(['add hello', 'add hello', 'add again', 'remove hello', 'add again', 'print']);