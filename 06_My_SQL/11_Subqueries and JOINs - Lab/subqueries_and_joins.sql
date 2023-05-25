SELECT e.employee_id, CONCAT(e.first_name, ' ', e.last_name) AS full_name,
d.department_id, d.`name`
FROM employees AS e
JOIN departments AS d
ON e.employee_id = d.manager_id
ORDER BY e.employee_id
LIMIT 5;


SELECT t.town_id, t.name, a.address_text
FROM towns as t
JOIN addresses as a
ON t.town_id = a.town_id
WHERE t.name IN ('San Francisco', 'Sofia', 'Carnation')
ORDER BY t.town_id, a.address_id;

SELECT e.employee_id, e.first_name, e.last_name, d.department_id, e.salary
FROM employees as e
JOIN departments as d
ON d.department_id = e.department_id
WHERE e.manager_id IS NULL;

SELECT COUNT(*)
FROM employees as e
WHERE e.salary > 
(
	SELECT AVG(e2.salary)
    FROM employees as e2
    );