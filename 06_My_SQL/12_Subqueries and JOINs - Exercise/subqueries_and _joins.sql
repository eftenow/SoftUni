SELECT e.`employee_id`, e.`job_title`, a.`address_id`, a.`address_text`
FROM `employees` as e
JOIN addresses as a
ON a.address_id = e.address_id
ORDER BY `address_id`
LIMIT 5;

SELECT e.`first_name`, e.`last_name`, t.`name`, a.`address_text`
FROM employees as e
JOIN `addresses` as a
ON e.`address_id` = a.`address_id`
JOIN `towns` as t
ON t.`town_id` = a.`town_id`
ORDER BY first_name, last_name
LIMIT 5;

SELECT e.employee_id, e.first_name, e.last_name, d.`name` AS `department_name`
FROM employees as e
JOIN `departments` as d
ON d.department_id = e.department_id
WHERE d.`name` = 'Sales'
ORDER BY employee_id DESC;

SELECT e.`employee_id`, e.`first_name`, e.`salary`, d.`name`
FROM employees as e
JOIN departments as d
ON d.department_id = e.department_id
WHERE `salary` > 15000
ORDER BY d.department_id DESC
LIMIT 5; 

SELECT e.`employee_id`, e.`first_name`
FROM employees as e
WHERE e.`employee_id` NOT IN(
	SELECT employee_id FROM employees_projects
)
ORDER BY employee_id DESC
LIMIT 3;

SELECT e.`first_name`, e.`last_name`, e.`hire_date`, d.`name`
FROM employees as e
JOIN departments as d
ON e.`department_id` = d.`department_id`
WHERE DATE(hire_date) > 1999/1/1 AND d.name IN ('Finance', 'Sales')
ORDER BY hire_date;

SELECT e.employee_id, e.first_name, p.`name`
FROM employees as e
JOIN employees_projects as ep
ON e.employee_id = ep.employee_id
JOIN projects as p
ON ep.project_id = p.project_id
WHERE DATE(p.start_date) > '2002-08-13' AND p.end_date IS NULL
ORDER BY e.`first_name`, p.`name`
LIMIT 5;

SELECT e.`employee_id`, e.`first_name`, if(YEAR(p.start_date) > 2004, NULL,  p.`name`) AS `project_name`
FROM employees as e
JOIN employees_projects AS ep
ON e.employee_id = ep.employee_id
JOIN projects as p
ON p.project_id = ep.project_id
WHERE e.employee_id = 24
ORDER BY project_name;

SELECT e.employee_id, e.first_name, e.manager_id, m.first_name AS `manager_name`
FROM employees as e
JOIN employees as m
ON e.manager_id = m.employee_id
WHERE e.manager_id IN (3, 7)
ORDER BY e.first_name;

SELECT e.employee_id, CONCAT_WS(' ', e.first_name, e.last_name) AS `employee_name`,
CONCAT_WS(' ', m.first_name, m.last_name) AS `manager_name`, d.`name` AS `department_name`
FROM employees as e
JOIN employees as m
ON e.manager_id = m.employee_id
JOIN departments as d
ON e.department_id = d.department_id
WHERE e.manager_id IS NOT NULL
ORDER BY e.employee_id
LIMIT 5;

SELECT AVG(salary) AS min_average_salary
FROM employees as e
GROUP BY e.department_id
ORDER BY min_average_salary
LIMIT 1;

USE geography;

SELECT mc.country_code, m.mountain_range, p.peak_name, p.elevation
FROM mountains_countries as mc
JOIN mountains as m
ON mc.mountain_id = m.id
JOIN peaks as p
ON m.id = p.mountain_id
WHERE p.elevation > 2835 AND mc.country_code = 'BG'
ORDER BY p.elevation DESC;

SELECT mc.country_code, COUNT(m.mountain_range) as mountain_range
FROM mountains_countries as mc
JOIN mountains as m
ON m.id = mc.mountain_id
WHERE mc.country_code IN ('BG', 'RU', 'US')
GROUP BY mc.country_code
ORDER BY mountain_range DESC;

SELECT c.country_name, r.river_name
FROM countries as c
LEFT JOIN countries_rivers as cr
ON c.country_code = cr.country_code
LEFT JOIN rivers as r
ON cr.river_id = r.id
JOIN continents as con
ON con.continent_code = c.continent_code
WHERE con.continent_name = 'Africa'
ORDER BY c.country_name
LIMIT 5;


SELECT c.continent_code, c.currency_code, c.currency_usage
FROM (
  SELECT continent_code, currency_code, COUNT(currency_code) as currency_usage
  FROM countries
  GROUP BY continent_code, currency_code
  HAVING currency_usage > 1
) AS c
JOIN (
  SELECT continent_code, MAX(currency_usage) as max_currency_usage
  FROM (
    SELECT continent_code, currency_code, COUNT(currency_code) as currency_usage
    FROM countries
    GROUP BY continent_code, currency_code
  ) AS temp
  GROUP BY continent_code
) AS max_usage
ON c.continent_code = max_usage.continent_code AND c.currency_usage = max_usage.max_currency_usage
ORDER BY c.continent_code, c.currency_code;

SELECT COUNT(c.country_code)
FROM countries as c
WHERE c.country_code NOT IN (
SELECT mc.country_code 
FROM mountains_countries as mc);


SELECT c.country_name, MAX(p.elevation) AS highest_peak_elevation, MAX(riv.length) AS longest_river_length
FROM 
(countries as c
JOIN mountains_countries as mc
ON c.country_code = mc.country_code
JOIN mountains as m
ON m.id = mc.mountain_id
JOIN peaks as p
ON p.mountain_id = m.id
)
JOIN(
	SELECT cr.river_id, r.length, cr.country_code
    FROM countries_rivers as cr
    JOIN rivers as r
    ON cr.river_id = r.id
) as riv
ON riv.country_code = c.country_code
GROUP BY c.country_name
ORDER BY highest_peak_elevation DESC, longest_river_length DESC
LIMIT 5; 
