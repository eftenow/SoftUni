function createSortedList() {
    let collection = []
    let result = {
        add,
        remove,
        get,
        size: 0,
    };

    return result;

    function add(element) {
        collection.push(element);
        collection.sort((a, b) => a - b );
        this.size++;
    }
    function remove(index) {
        if (indexIsValid(index)) {
            collection.splice(index, 1);
            this.size--;
        };

    }
    function get(index) {
        if (indexIsValid(index)){
            return collection[index];
        }
    }

    function indexIsValid(index) {
        return 0 <= index && index < collection.length;
    }



}


let list = createSortedList();
list.add(5);
list.add(11);
list.add(22);
list.add(8);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
