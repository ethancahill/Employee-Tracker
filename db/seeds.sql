INSERT INTO departments (name)
VALUES
    ('HR'),
    ('Sales'),
    ('IT');

INSERT INTO roles (title, salary, department_id)
VALUES 
    ('Recruiter', 55713, 1),
    ('Human Resource Manager', 71320, 1),
    ('Salesman', 63212, 2),
    ('Sales Manager', 89241, 2),
    ('IT Technician', 65312, 3),
    ('IT Manager', 94212, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Ethan', 'Cahill', 6, NULL),
    ('Agustina', 'Cahill', 2, NULL),
    ('Flynn', 'Cahill', 1, 2),
    ('Tony', 'Tiger', 5, 1),
    ('Mary', 'Berry', 4, NULL),
    ('Paul', 'Hollywood', 3, 5);
