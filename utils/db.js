const db = require('../db/connection');
const inquirer = require('inquirer');

const departmentQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of the new department?"
    }
];

const viewDepartments = () => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log('Error')
        }
        console.log(rows);
    });
};

const viewRoles = () => {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log('Error')
        }
        console.log(rows);
    });
};


const viewEmployees = () => {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log('Error')
        }
        console.log(rows);
    });
};

const addDepartment = async () => {
    const sql = `INSERT INTO departments (name) VALUES ?`
    const response = await inquirer.prompt(departmentQuestions);
    const params = [response.name];

    db.query(sql, params, (err, result) =>{
        if (err) {
            console.log('Error')
        }
        console.log(result)
    })
}

const addRole = () => {

}

const addEmployee = () => {

}

const updateEmployee = () => {

}

module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployee }