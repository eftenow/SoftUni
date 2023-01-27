function filterEmployees(data, criteria){
    const employees = JSON.parse(data);
    let [criteriaProp, criteriaValue] = criteria.split('-');
    
    return employees
    .filter(employee => employee[criteriaProp] == criteriaValue)
    .map((employeeData, index) => `${index}. ${employeeData['first_name']} ${employeeData['last_name']} - ${employeeData['email']}`).join('\n');
}



console.log(filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'));


//0. Ardine Bassam - abassam0@cnn.com
//1. Kizzee Jost - kjost1@forbes.com