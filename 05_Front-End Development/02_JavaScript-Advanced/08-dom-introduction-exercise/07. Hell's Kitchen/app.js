function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   function onClick() {
      let inputElement = JSON.parse(document.querySelector('#inputs textarea').textContent);
      let restaurants = {};

      for (const token of inputElement) {
         let [rName, rEmployees] = token.split(' - ');
         for (const emp of rEmployees.split(', ')) {
            let [name, salary] = emp.split(' ');
            salary = Number(salary);
            if (!restaurants.hasOwnProperty(rName)){
               restaurants[rName] = {};
            }
            if (restaurants.hasOwnProperty(rName)){
               restaurants[rName][name] = salary;
            }
         }
         
      }

      let entries = Object.entries(restaurants);
      let bestRestaurant;
      let highestAvg = 0;
      let highestSal = 0;

      for (const entry of entries) {
         let [rName, rEmployees] = entry;
         let currentAvg = 0;
         let empEntries = Object.entries(rEmployees);

         let totalSalaries = empEntries.reduce((acc, value) => acc += value[1], 0)
         let avgSalary = totalSalaries / empEntries.length;
         let currentHighestSalary = empEntries.sort((a,b)=>a[1]-b[1])[empEntries.length - 1][1];
         if (avgSalary > highestAvg){
            bestRestaurant = rName;
            highestAvg = avgSalary.toFixed(2);
            
            highestSal = currentHighestSalary.toFixed(2);
         }
      }

      let firstOutputLine = `Name: ${bestRestaurant} Average Salary: ${highestAvg} Best Salary: ${highestSal}`
      let secondOutputLine = '';
      let workers = Object.entries(restaurants[bestRestaurant])
      .sort((a, b) => b[1] - a[1])  
      .forEach(worker => {
         secondOutputLine += `Name: ${worker[0]} With Salary: ${worker[1]} `
      });
      document.querySelector('#bestRestaurant p').textContent = firstOutputLine;
      document.querySelector('#workers p').textContent = secondOutputLine;
   }


}


//Name: TheLake Average Salary: 913.33 Best Salary: 1300.00
//Name: Bob With Salary: 1300 
//Name: Joe With Salary: 780 
//Name: Jane With Salary: 660