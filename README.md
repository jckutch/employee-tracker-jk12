# employee-tracker-jk12
# <font color="gold">Employee Tracker</font>
# 
 
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/)

## Description
In this project, an application called "Employee Tracker" that can be used to enter, edit, save and delete employee infromation in a company database.  It will present tables for employee's, job roles and company departments.


## Table of Contents

  * [User Story](#userstory)
  * [Acceptance Criteria](#acceptance)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Links](#links)
  * [Mockup](#mockup)
  * [License](#license)


## User Story
  <a name="userstory"></a>
AS A business owner<br />
I WANT to be able to view and manage the departments, roles, and employees in my company<br />
SO THAT I can organize and plan my business<br />


## Acceptance Criteria
  <a name="acceptance"></a>
GIVEN a command-line application that accepts user input<br />
WHEN I start the application<br />
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role<br />
WHEN I choose to view all departments<br />
THEN I am presented with a formatted table showing department names and department ids<br />
WHEN I choose to view all roles<br />
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role<br />
WHEN I choose to view all employees<br />
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to<br />
WHEN I choose to add a department<br />
THEN I am prompted to enter the name of the department and that department is added to the database<br />
WHEN I choose to add a role<br />
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database<br />
WHEN I choose to add an employee<br />
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database<br />
WHEN I choose to update an employee role<br />
THEN I am prompted to select an employee to update and their new role and this information is updated in the database <br />


## Installation 
  <a name="installation"></a>
    1) User can copy repository from github at: (https://github.com/jckutch/employee-tracker-jk12)<br />
    2) Then install all dependencies with `npm i` in terminal.<br />
    3) Then in `server.js` replace line 11 password (*) with your (personal MySQL password).<br />
    4) Then log into MySQL by entering `mysql -u root -p` in the command line, using your personal password.<br />
    5) Then execute database by entering `SOURCE db/schema.sql` followed by ` SOURCE db/seeds.sql`.<br />
    5) Then enter `quit` in MySQL and enter `npm start` in terminal to run application.<br />


## Usage
  <a name="usage"></a>
User can view, add, delete and update employee information from the database.<br />


## Tests
  <a name="tests"></a>
No test


## Links
  <a name="links"></a>
Repository Link:  https://github.com/jckutch/employee-tracker-jk12<br />


## Mockup
  <a name="mockup"></a>
  Link to Mockup VIDEO:<br />
   https://drive.google.com/file/d/1U1bRbCtEWhxDGv5d3r3lJBGbJiwbXJlZ/view<br />
   <br />

<font color="#e9d66b">Sample Images:</font><br />

![image](./assets/Departments_Screenshot%20.jpg)<br />
![image](./assets/Roles_Screenshot.jpg)<br />
![image](./assets/Employees_Screenshot.jpg)<br />


## License 
  <a name="license"></a> License
Licensed under <br /> [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/).
