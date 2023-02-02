class List {
    listOfNumbers = [];
    size = 0;

    add(element) {
        this.listOfNumbers.push(element);
        this.size++;
        this.sortArr();
    };
    remove(index) {
        this.checkValidInd(index)
        this.listOfNumbers.splice(index, 1);
        this.size-- ;
        this.sortArr();

    };
    get(index) {
        this.checkValidInd(index)
        this.sortArr();
        return this.listOfNumbers[index];
    };
    sortArr(){
        return this.listOfNumbers.sort((a, b) => a - b);
    }
    checkValidInd(ind) {
        if (ind > this.size - 1 || ind < 0){
            throw new Error('Invalid index');
        }
    }
}
