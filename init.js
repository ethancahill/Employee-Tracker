const inquirer = require('inquirer');
const {viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployee} = require('./utils/db')

const startUpQuestions = [
    {
        type:"list",
        name: "startUp",
        message: "What would you like to do?",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee"
        ]
    }
];

const init = async () => {
    let userPrompt = await inquirer.prompt(startUpQuestions)
    let response = userPrompt.startUp

    switch (response){
        case 'View All Departments':
            console.log('Departments displayed:')
            viewDepartments()
            break;

        case 'View All Roles':
            console.log('Roles displayed:')
            viewRoles()
            break;
        
        case 'View All Employees':
            console.log('Employees displayed')
            viewEmployees()
            break;

        case 'Add a Department':
            console.log('Add a department selected')
            addDepartment()
            break;

        case 'Add a Role':
            console.log('Add a role selected')
            addRole()
            break;

        case 'Add an Employee':
            console.log('Add a role selected')
            addEmployee()
            break;

        case 'Update an Employee':
            console.log('Update an employee selected')
            updateEmployee()
            break;
    }
}

init()