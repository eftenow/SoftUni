const formEl = document.getElementById('form');
const baseUrl = 'http://localhost:3030/jsonstore/collections/students';
const tableBody = document.querySelector('tbody');
const submitBtn = document.getElementById('submit');


window.addEventListener('load', async function () {
    const response = await fetch(baseUrl);
    const existingStudents = await response.json();
    Object.values(existingStudents).forEach(studentInfo => {
        addNewStudentToTable(studentInfo);
    });
})

submitBtn.addEventListener('click', async () => {
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const facultyNumber = document.querySelector('input[name="facultyNumber"]').value;
    const grade = document.querySelector('input[name="grade"]').value;

    if(!firstName || !lastName || !facultyNumber || !grade){
        return;
    }

    const studentObj = {firstName, lastName, facultyNumber, grade}
    
    const response = await fetch (baseUrl, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(studentObj)
    });

    const studentInfo = response.json();
    addNewStudentToTable(studentInfo);
    
})



function addNewStudentToTable(student) {
    const fName = document.createElement('td');
    fName.textContent = student.firstName;

    const lName = document.createElement('td');
    lName.textContent = student.lastName;

    const fNumber = document.createElement('td');
    fNumber.textContent = student.facultyNumber;

    const grade = document.createElement('td');
    grade.textContent = student.grade;

    const newStudent = document.createElement('tr');
    newStudent.append(fName, lName, fNumber, grade);
    newStudent.id = student._id;

    tableBody.appendChild(newStudent);
}