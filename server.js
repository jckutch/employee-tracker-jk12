const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');

const PORT = process.env.PORT || 3306;

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '*',
        database: 'employee_db'
    },
    console.log(`Connected to employee_db database.`)
);

const startPrompt = () => {
    console.log(`Welcome to the Employee Tracker!`);
}

const inputResponse = () => {

// VIEW ALL function for departments, roles, employee -------------------------

    const viewAllDepartments = () => {
        const sql = `SELECT id, name FROM departments`;
        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
            };
            console.table(result); 
            selectInput();
        });
    }

    const viewAllRoles = () => {
        const sql = `SELECT roles.id as id, roles.title as title, departments.name as department, roles.salary as salary FROM roles JOIN departments ON roles.department_id = departments.id;`;
        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
            };
            console.table(result);
            selectInput();
        });
    }

    const viewAllEmployees = () => {
        const sql = `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employees e LEFT JOIN roles r ON e.role_id = r.id LEFT JOIN departments d ON r.department_id = d.id LEFT JOIN employees m ON m.id = e.manager_id`;
        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
            };
            console.table(result);
            selectInput();
        });
    }

// ADD function for departments, roles, employee ----------------------------------

    const addDepartment = () => {inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Enter the name of department?'
            }])
        .then((answers) => {
            const sql = `INSERT INTO departments (name) VALUES (?)`;
            const params = answers.name;
            db.query(sql, params, (err, result) => {
                if (err) {
                    console.log(err);
                };
                selectInput();
            });
        });
    }

    const addRole = async () => {        
        const viewDepartments = await getDapartments();

        inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the title of new role?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the salary of new role?'
            },
            {
                type: 'list',
                name: 'department',
                message: 'Enter the department for new role?',
                choices: viewDepartments
            }
        ])
        .then((answers) => {
            const chosenSalary = parseInt(answers.salary);
            const chosenDepartment = answers.department;
            let chosenDepartmentID;
            for (let i = 0; i < viewDepartments.length; i++) {
                if (chosenDepartment == viewDepartments[i]) {
                    chosenDepartmentID = i + 1;
                };
            };
            const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?)`;
            const params = [answers.title, chosenSalary, chosenDepartmentID];
            db.query(sql, [params], (err, result) => {
                if (err) {
                    console.log(err);
                }
    
                selectInput();
            });
        });
    }
    






// Input selector prompts
    const selectInput = () => {
        inquirer
        .prompt([
            {
                type: 'list',
                name: 'decision',
                message: 'What would you like to do?',
                choices: [  'View all departments',
                            'View all roles',
                            'View all employees',
                            'Add a new department',
                            'Add a new role',
                            'Add a new employee',
                            "Update an employee's role",
                            'Quit'],
            }
        ])
        .then((answers) => {        
            if (answers.decision === 'View all departments') {
                viewAllDepartments();
            } else if (answers.decision === 'View all roles') {
                viewAllRoles();
            } else if (answers.decision === 'View all employees') {
                viewAllEmployees();
            } else if (answers.decision === 'Add a department') {
                addDepartment();
            } else if (answers.decision === 'Add a role') {
                addRole();
            }
        });
    }

    selectInput();
}













const init = () => {
    startPrompt();
    inputResponse();
}

init();