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













const init = () => {
    startPrompt();
    inputResponse();
}

init();