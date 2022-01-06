class Employee {
  constructor(_firstName, _middleName, _lastName, _phoneNumber, _email) {
    this.firstName = _firstName;
    this.middleName = _middleName;
    this.lastName = _lastName;
    this.phoneNumber = _phoneNumber;
    this.email = _email;
  }
}

class ProfileCard {
  static displayEmployees() {
    const StoredEmployee = [
      {
        _firstName: "Christopher",
        _middleName: "Thomas",
        _lastName: "Guy",
        _phoneNumber: "587 579 2490",
        _email: "guycorpindustries@gmail.com",
      },
      {
        _firstName: "Chris",
        _middleName: "T",
        _lastName: "Guy",
        _phoneNumber: "911 411 2490",
        _email: "guycorpindustries@outlook.com",
      },
      {
        _firstName: "Topher",
        _middleName: "Mas",
        _lastName: "Loco",
        _phoneNumber: "587 579 5150",
        _email: "clark_griswald@outlook.com",
      },
    ];

    const employeeList = StoredEmployee;

    employeeList.forEach((employee) => ProfileCard.addEmployeeToList(employee));
  }

  static addEmployeeToList(_employee) {
    const list = document.getElementById("employee-list");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${_employee._firstName}</td>
        <td>${_employee._middleName}</td>
        <td>${_employee._lastName}</td>
        <td>${_employee._phoneNumber}</td>
        <td>${_employee._email}</td>
        <td><a class="delete btn btn-danger" href="#">X</a></td>
        `;

    list.appendChild(row);
  }
  /*
  static deleteEmployee(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
*/
  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".employee");
    const form = document.querySelector("#employee");
    container.insertBefore(div, form);
    // Vanish after 3 seconds
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  static clearFields() {
    document.querySelector("#firstName").value = "";
    document.querySelector("#middleName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#phoneNumber").value = "";
    document.querySelector("#email").value = "";
  }
}

/*class Store {
  static getEmployeeList() {
    let employeeList;
    if (localStorage.getItem('employeeList') === null) {
      employeeList = [];
    } else {
      employeeList = JSON.parse(localStorage.getItem('employeeList'));
    }
    return employeeList;
  }

  static addEmployee(employee) {
    const employees = Store.getEmployees();

    employees.push(employee);

    localStorage.setItem('employees', JSON.stringify(employees));
  }

  static removeEmployee(lastName) {
    const employees = Store.getEmployees();

    employees.forEach((employee, index) => {
      if (employee.lastName === lastName) {
        employees.splice(index, 1);
      }
    });

    localStorage.setItem("employees", JSON.stringify(employees));
  }
}*/

// Event: Display Employee Table
document.addEventListener("DOMContentLoaded", ProfileCard.displayEmployees);

// Event: Add Employee
document.querySelector("#newEmployee").addEventListener("submit", (e) => {
  // Prevent Submit
  e.preventDefault();

  // Get Form Values, These are the input values with a new const yhat is used to instantiate a new Employee
  const firstName = document.querySelector("#firstName").value;
  const middleName = document.querySelector("#middleName").value;
  const lastName = document.querySelector("#lastName").value;
  const phoneNumber = document.querySelector("#phoneNumber").value;
  const email = document.querySelector("#email").value;

  // Validate

  // Instantiate Employee
  const employee = new Employee(
    firstName,
    middleName,
    lastName,
    phoneNumber,
    email
  );

  // Add Employee to Profile Card
  ProfileCard.addEmployeeToList(employee);

  // Clear Fields
  ProfileCard.clearFields();
});

// Add Employee to Store class

// Show success message

/*
// Event: Remove a Book

document.querySelector("#employee-list").addEventListener("click", (e) => {
  // Remove from UI
  ProfileCard.deleteEmployee(e.target);

  // Remove from Store
  Store.removeEmployee(
    e.target.parentElement.previousElementSibling.textContent
  );

  // Show success message
  ProfileCard.showAlert("Employee Removed", "success");

*/

// console.log(ProfileCard);
