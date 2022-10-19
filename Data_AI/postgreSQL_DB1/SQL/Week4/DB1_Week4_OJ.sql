--04b
--outer joins

--ex.1

DELETE FROM tasks
WHERE employee_id='999666666';

INSERT INTO departments
(department_id, department_name, manager_id, mgr_start_date)
VALUES(2,'Sales','999555555',NOW());

SELECT e.last_name, e.first_name, p.project_id
FROM employees e
         LEFT JOIN projects p ON (p.department_id = e.department_id)
ORDER BY e.employee_id;

--ex.2

SELECT e.last_name, e.first_name
FROM employees e
LEFT JOIN projects p ON (e.department_id = p.department_id)
WHERE e.department_id IS NULL
ORDER BY e.employee_id;

--ex.3

SELECT e.last_name, e.first_name, COUNT(p.project_id) AS "number of projects"
FROM employees e
LEFT JOIN projects p ON (e.department_id = p.department_id)
GROUP BY e.last_name, e.first_name




