//Task 1 - Created Employee Class

class Employee {
    constructor(name, id, department, salary) { //Constructor setting up specified properties
        self.name = name;
        self.id = id;
        self.department = department;
        self.salary = salary;
    };
    
    getDetails() { //Setting up getDetails method
        return `Employee: ${self.name}, ID: ${self.id}, Department: ${self.department}, Salary: $${self.salary}`; //Returning employee details formatted in a template literal
    };
    
    calculateAnnualSalary() { //Setting up calculateAnnualSalary method
        return salary * 12; //Returning employee's salary times twelve months
    };
};

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); //Creating a new employee assigned to emp1

console.log(emp1.getDetails()); //Logging
console.log(emp1.calculateAnnualSalary()); //Logging