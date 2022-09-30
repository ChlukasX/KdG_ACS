SELECT * FROM employees;

UPDATE employees
SET location='maastricht'
WHERE employee_id='999555555';

--ex.1
SELECT *
FROM projects;

--ex.2
SELECT project_name, department_id
FROM projects;

--ex.3
--a and b (a has no AS " ")
SELECT 'project' AS " ", project_id, 'is handled by ' AS " ", department_id
FROM projects;
--c
SELECT 'project ' || project_id || ' is handled by ' || department_id AS "projects with departments"
FROM projects;

--ex.4
SELECT current_date - birth_date
FROM FAMILY_MEMBERS; --this should subtract the current date by the birthdate of a family member
--answer is the days a family member has lived

--ex.5
--a
SELECT employee_id,project_id,hours; --missing table


SELECT * FROM TASK; -- missing an s

SELECT department_id, manager_id, start_date FROM DEPARTMENTS; --start_date does not exist in departments

--b
SELECT last_name, salary department_id FROM EMPLOYEES; --missing comma between salary and department_id

--ex.6
SELECT DISTINCT initcap(location) AS "city"
FROM employees;

--ex.7
SELECT DISTINCT department_id, initcap(location) AS "city"
FROM employees;

--ex.8
--a
SELECT now();
SELECT current_date;

--b
SELECT  0.85 * 150 AS "calculations"

--c
SELECT ' ' || 'Data retrieval' || ' Chapter 3-4' AS "Best course";

--ex.9
SELECT employee_id AS "employee", name AS "NAME FAMILY MEMBER", relationship, gender
FROM family_members
WHERE employee_id='999111111'
ORDER BY name asc;

--ex.10
SELECT *
FROM departments
WHERE department_name ='Administration';

--ex.11
SELECT employee_id, last_name, location AS "city"
FROM employees
WHERE initcap(location)='Maastricht';

--ex.12
SELECT employee_id, project_id, hours
FROM tasks
WHERE hours > 20 AND hours < 35 AND project_id='10';

--ex.13
SELECT project_id, hours
FROM tasks
WHERE hours < 10 AND employee_id='999222222';

--ex.14
SELECT employee_id, last_name, province
FROM employees
WHERE province = 'NB' OR province = 'GR';

SELECT employee_id, last_name, province
FROM employees
Where province IN ('GR', 'NB');

--ex.15
SELECT department_id, first_name
FROM employees
WHERE first_name IN ('Suzan', 'Martina', 'Henk', 'Douglas') ORDER BY department_id desc, first_name asc;

--ex.16
