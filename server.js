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

// view all functions for departments, roles, employee --------

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






// Input selector prompt
    const selectInput = () => {
        inquirer
        .prompt([
            {
                type: 'list',
                name: 'decision',
                message: 'What would you like to do?',
                choices: ['View all departments',
                            'View all roles',
                            'View all employees',
                            'Add a department',
                            'Add a role',
                            'Add an employee',
                            "Update an employee's role",
                            'Quit'],
            }
        ])
        .then((answers) => {        
            if (answers.decision === 'View all departments') {
                viewAllDepartments();
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