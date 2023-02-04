function Person(firstName, lastName){
    return {
        firstName,
        lastName,
        get fullName () {
            return this.firstName + ' ' + this.lastName
        },
        set fullName (value){
            value = value.split(' ')
            if (value.length < 2){
                return;
            }
            this.firstName = value[0];
            this.lastName = value[1];
            
        }
        
    }
   
}

let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson