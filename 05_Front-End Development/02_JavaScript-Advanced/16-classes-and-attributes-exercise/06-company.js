class Company {
    departments = {};

    addEmployee = (name, salary, position, department) => {
        this._numValidator(salary);
        this._textValidator(name, position, department);
        salary = Number(salary);
        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        class Employee {
            constructor(name, salary, position) {
                this.name = name;
                this.salary = salary;
                this.position = position;
            }
        }
        this.departments[department].push(new Employee(name, salary, position))
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let bestAvgSalary = 0;
        let bestDep = '';
        const departmentsEntries = Object.entries(this.departments);
        departmentsEntries.forEach(dep => {
            const currentDepAvgSalary = this.getAvgSalary(dep);
            if (currentDepAvgSalary > bestAvgSalary) {
                bestAvgSalary = currentDepAvgSalary;
                bestDep = dep[0];
            }
        });
        let sortedBestDepartment = this.departments[bestDep].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        });
        let result = `Best Department is: ${bestDep}\nAverage salary: ${bestAvgSalary.toFixed(2)}\n${sortedBestDepartment.map(emp => `${emp.name} ${emp.salary} ${emp.position}`).join('\n')}`
        return result;
    }

    getAvgSalary(dep) {
        const employees = dep[1];
        let avgSal = employees.reduce((acc, emp) => acc += Number(emp.salary), 0);
        return avgSal / employees.length;
    }

    _textValidator(...param) {
        let invalidParams = param.filter(p => p == null || p == undefined || p == '');
        if (invalidParams.length > 0) {
            throw new Error('Invalid input!')
        }
    }
    _numValidator(num) {
        if (num <= 0) {
            throw new Error('Invalid input!');
        }
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());