--ex.1

SELECT 	*
FROM 	employees
WHERE 	AVG(salary)>30000; --not allowed AVG

SELECT employee_id, SUM(hours)
FROM tasks;

--ex.2

SELECT hours
FROM tasks
WHERE employee_id='9994444';

SELECT COUNT(hours)
FROM tasks
WHERE employee_id='9994444';

SELECT SUM(hours)
FROM tasks
WHERE employee_id='9994444';

--ex.3

SELECT SUM(salary)
FROM employees;

SELECT COUNT(salary)
FROM employees;

--ex.4

SELECT COUNT(*)
FROM tasks;

SELECT COUNT(hours)
FROM tasks;

--ex.5

SELECT  COUNT(project_id) AS "count_projects"
FROM projects;

--ex.6

SELECT avg(hours) AS "number_of_hours"
FROM tasks;

--ex.7

SELECT count(distinct employee_id)
FROM family_members
WHERE lower(relationship) != 'partner';

--ex.8
SELECT max(hours)
FROM tasks
WHERE project_id = '20';

--ex.9

SELECT MAX(birth_date)
FROM family_members
WHERE employee_id = '999111111';

--ex.10

SELECT ROUND(AVG(LENGTH(last_name)))
FROM employees;

--ex.11

SELECT DISTINCT project_id, COUNT (employee_id)
FROM tasks
GROUP BY project_id
ORDER BY project_id;

--ex.12

SELECT ROUND(AVG(employee_id))
FROM
(
    SELECT COUNT(project_id) AS employee_id
    FROM tasks
    GROUP BY project_id
) t;

--ex.13

SELECT DISTINCT department_id, count(employee_id)
FROM employees
WHERE lower(province) = 'li'
GROUP BY department_id;

--ex.16
SELECT DISTINCT employee_id, relationship, COUNT(relationship)
FROM family_members
WHERE lower(relationship) != 'partner'
GROUP BY employee_id, relationship
ORDER BY employee_id

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
LEFT JOIN projects p ON (p.department_id=e.department_id)
ORDER BY e.employee_id









