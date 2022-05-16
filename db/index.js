const connection = require('./connection');

class db {
    constructor(connection){
        this.connection = connection
    }
    findAllDepartments() {
        return this.connection.promise().query(`SELECT * FROM departments`)
    };
    findAllEmployees() {
        return this.connection.promise().query(`SELECT employees.*, roles.title AS role_title FROM employees LEFT JOIN roles ON employees.role_id = roles.id`)
    };
    findAllRoles() {
        return this.connection.promise().query(`SELECT roles.*, departments.name AS department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id`)
    };
    addNewDepartment(params) {
        return this.connection.promise().query(`INSERT INTO departments (name) VALUES (?)`, params )
    };
    addNewRole(params) {
        return this.connection.promise().query(`INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`, params )
    };
    addNewEmployee(params) {
        return this.connection.promise().query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`, params)
    };
    changeEmployee(params) {
        return this.connection.promise().query(`UPDATE employees set role_id = ? WHERE id = ?`,)
    }
}

module.exports = new db(connection);