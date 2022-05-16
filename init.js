const inquirer = require('inquirer');
const db = require('./db');
require('console.table');


function startUp() {
    inquirer.prompt([{
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
            {
                name: "View All Departments",
                value: "View All Departments"
            },
            {
                name: "View All Roles",
                value: "View All Roles"
            },
            {
                name: "View All Employees",
                value: "View All Employees"
            },
            {
                name: "Add a new department",
                value: "Add a Department"
            },
            {
                name: "Add a new role",
                value: "Add a Role"
            },
            {
                name: "Add a new Employee",
                value: "Add an Employee"
            },
            {
                name: "Update current employee",
                value: "Update an Employee"
            },
            {
                name: "Goodbye",
                value: "Quit"
            }
        ]
    }]).then(result => {
        let choice = result.choice

        switch (choice) {
            case 'View All Departments':
                console.log(`Departments displayed:`)
                viewDepartments()
                break;

            case 'View All Roles':
                console.log('Roles displayed:')
                viewRoles()
                break;

            case 'View All Employees':
                console.log('Employees displayed:')
                viewEmployees()
                break;

            case 'Add a Department':
                addDepartment()
                break;

            case 'Add a Role':
                addRole()
                break;

            case 'Add an Employee':
                addEmployee()
                break;

            case 'Update an Employee':
                updateEmployee()
                break;

            case 'Quit':
                console.log('Goodbye')
                process.exit()
        }
    })
};

function viewDepartments() {
    db.findAllDepartments().then(([rows]) => console.table(rows)).then(() => startUp())
};

function viewRoles() {
    db.findAllRoles().then(([rows]) => console.table(rows)).then(() => startUp())
};


function viewEmployees() {
    db.findAllEmployees().then(([rows]) => console.table(rows)).then(() => startUp())
};

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "newDepartment",
            message: "What would you like to name your new department?"
        }
    ])
        .then(response => {
            const params = [response.newDepartment]
            return params;
        })
        .then(params => db.addNewDepartment(params))
        .then(() => console.log(`
    Department Added
    ================`))
        .then(() => startUp())
};

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the new role's title?"
        },
        {
            type: "input",
            name: "salary",
            message: "How much is the role's salary?"
        },
        {
            type: "list",
            name: "department",
            message: "What department is this role a part of?",
            choices: [
                {
                    name: "HR",
                    value: 1
                },
                {
                    name: "Sales",
                    value: 2
                },
                {
                    name: "IT",
                    value: 3
                }
            ]
        }
    ])
        .then(response => {
            const params = [response.title, response.salary, response.department]
            return params;
        })
        .then(params => db.addNewRole(params))
        .then(() => console.log(`
   Role Added
    =========`))
        .then(() => startUp())
}

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the new employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the new employee's last name?"
        },
        {
            type: "list",
            name: "role",
            message: "What role does this employee have?",
            choices: [
                {
                    name: "Recruiter",
                    value: 1
                },
                {
                    name: "Human Resource Manager",
                    value: 2
                },
                {
                    name: "Salesman",
                    value: 3
                },
                {
                    name: "Sales Manager",
                    value: 4
                },
                {
                    name: "IT Technician",
                    value: 5
                },
                {
                    name: "IT Manager",
                    value: 6
                }
            ]
        },
        {
            type: "list",
            name: "manager",
            message: "Do you have a manager?",
            choices: [
                {
                    name: "Ethan Cahill",
                    value: 1
                },
                {
                    name: "Agustina Cahill",
                    value: 2
                },
                {
                    name: "Flynn Cahill",
                    value: 3
                },
                {
                    name: "Tony Tiger",
                    value: 4
                },
                {
                    name: "Mary Berry",
                    value: 5
                },
                {
                    name: "Paul Hollywood",
                    value: 6
                },
                {
                    name: "No",
                    value: null
                }
            ]

        }
    ])
        .then(response => {
            const params = [response.first_name, response.last_name, response.role, response.manager]
            return params;
        })
        .then(params => db.addNewEmployee(params))
        .then(() => console.log(`
    Employee Added
    ===============`))
        .then(() => startUp())

}

function updateEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "employee",
            message: "Which employee would you like to change?",
            choices: [
                {
                    name: "Ethan Cahill",
                    value: 1
                },
                {
                    name: "Agustina Cahill",
                    value: 2
                },
                {
                    name: "Flynn Cahill",
                    value: 3
                },
                {
                    name: "Tony Tiger",
                    value: 4
                },
                {
                    name: "Mary Berry",
                    value: 5
                },
                {
                    name: "Paul Hollywood",
                    value: 6
                }
            ]
        },
        {
            type: "list",
            name: "role",
            message: "What is the employee's new role?",
            choices: [
                {
                    name: "Recruiter",
                    value: 1
                },
                {
                    name: "Human Resource Manager",
                    value: 2
                },
                {
                    name: "Salesman",
                    value: 3
                },
                {
                    name: "Sales Manager",
                    value: 4
                },
                {
                    name: "IT Technician",
                    value: 5
                },
                {
                    name: "IT Manager",
                    value: 6
                }
            ]
        }
    ])
    .then(response => {
        const params = [response.role, response.employee]
        return params;
    })
    .then(params => db.changeEmployee(params))
    .then(() => console.log(`
                            Employee Modified
                            =================`))
    .then(() => startUp())

}



startUp()