INSERT INTO departments (name)
VALUES  ("Executive"),
        ("Legal"),
        ("Engineering"),
        ("Sales/Marketing"),
        ("Accounting/Finance"),
        ("Operations");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Lead Engineer", 150000, 3),
        ("Attorney", 120000, 2),
        ("Finance Manager", 160000, 5),
        ("Director of Operations", 360000, 6),
        ("Operator", 125000, 6),
        ("CEO", 2500000, 1),
        ("Accounts Manager", 190000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Kutch", 6, NULL),
        ("Shelley", "Torres", 2, 1),
        ("Steven", "Alexander", 3, 1),
        ("Ashely", "Edwards", 4, 1),
        ("Kyle", "Schneider", 5, 4),
        ("Mia", "Smith", 1, 4);