function solve(){
    class Employee {
        constructor(name, age){
            this.name = name;
            this.age = age;
            this._salary = 0;
            this._tasks = [];
            this._currentTask = 0;
        }
        work() {
            if (this._currentTask >= this._tasks.length){
                this._currentTask = 0;
            }
            const responsibility = this._tasks[this._currentTask]
            this._currentTask++;

            console.log(`${this.name} ${responsibility}`);
        }
        collectSalary(){
            console.log(`${this.name} received ${this._salary} this month.`);
        }
        get salary(){
            return this._salary;
        }
        set salary(n){
            return this._salary += n;
        }
    }

    class Junior extends Employee {
        constructor(name, age){
            super(name, age);
            this._tasks = ["is working on a simple task."]
        }
    }

    class Senior extends Employee {
        constructor(name, age){
            super(name, age);
            this._tasks = ["is working on a complicated task.", "is taking time off work.", "is supervising junior workers."]
        }
    }

    class Manager extends Employee {
        constructor(name, age){
            super(name, age);
            this._tasks = ["scheduled a meeting.", "is preparing a quarterly report."];
            this._dividend = 0;
        }
        get dividend(){
            return this._dividend;
        }
        set dividend(n){
            return this._dividend += n;
        }
        collectSalary(){
            console.log(`${this.name} received ${this._salary + this._dividend} this month.`);
        }
    }
    return {Employee, Junior, Senior, Manager};
}