SELECT a. department_id
     ,department_name
     ,project_id
     ,project_name
     ,location
FROM DEPARTMENTS a, PROJECTS ;

SELECT a.department_id, department_name, project_id, project_name, location
FROM departments a, projects;

--ex.2
SELECT d.department_id, d.manager_id, e.last_name, e.salary, e.parking_spot
FROM employees e
JOIN departments d on e.employee_id = d.manager_id
ORDER BY department_id;

--ex.3

SELECT p.project_name, p.location, e.first_name || ' ' || e.last_name AS "full_name", p.department_id
FROM projects p
JOIN tasks t on p.project_id = t.project_id
JOIN employees e on e.employee_id = t.employee_id;

--ex.4

SELECT p.project_name, p.location, e.first_name || ' ' || e.last_name AS "full_name", p.department_id
FROM projects p
         JOIN tasks t on p.project_id = t.project_id
         JOIN employees e on e.employee_id = t.employee_id
WHERE p.location = 'Eindhoven' OR p.department_id = 3;

--ex.5
SELECT e.first_name, e.last_name,
FROM employees e


--ex.6
SELECT e.first_name || ' ' || e.last_name AS employee_name, f.name, f.gender, f.birth_date AS "Date of Birth"
FROM employees e
JOIN family_members f on e.employee_id = f.employee_id
ORDER BY f.birth_date asc;

--autojoins

--ex.4
SELECT e.last_name AS "employee", mgr.last_name AS "boss", b.last_name AS "überboss"
FROM employees e
JOIN employees mgr ON (mgr.employee_id = e.manager_id)
JOIN employees b ON (b.employee_id = mgr.manager_id)




