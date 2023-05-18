	USE `gringotts`;
    
    SELECT COUNT(*) as 'count'
    FROM wizzard_deposits;
    
    SELECT MAX(magic_wand_size) AS 'longest_magic_wand'
    FROM wizzard_deposits;
    
    SELECT deposit_group, MAX(magic_wand_size) AS 'longest_magic_wand'
    FROM wizzard_deposits
    GROUP BY deposit_group
    ORDER BY `longest_magic_wand`, `deposit_group`;
    
    SELECT deposit_group 
    FROM wizzard_deposits
    GROUP BY deposit_group
    ORDER BY AVG(magic_wand_size)
    LIMIT 1;
    
    SELECT deposit_group, ROUND(SUM(deposit_amount), 2) AS total_sum
    FROM wizzard_deposits
    GROUP BY deposit_group
    ORDER BY total_sum;
    
    SELECT deposit_group, ROUND(SUM(deposit_amount), 2) AS total_sum
    FROM wizzard_deposits
    WHERE magic_wand_creator = 'Ollivander Family'
    GROUP BY deposit_group
    ORDER BY deposit_group;
    
    
    SELECT deposit_group, ROUND(SUM(deposit_amount), 2) AS total_sum
    FROM wizzard_deposits
    WHERE magic_wand_creator = 'Ollivander Family'
    GROUP BY deposit_group
    HAVING `total_sum` < 150000
    ORDER BY total_sum DESC;
    
    
    SELECT deposit_group, magic_wand_creator, ROUND(MIN(deposit_charge), 2) AS min_deposit_charge
    FROM wizzard_deposits
    GROUP BY deposit_group, magic_wand_creator
    ORDER BY magic_wand_creator, deposit_group;
    
    SELECT (
		CASE
        WHEN AGE BETWEEN 0 AND 10 THEN '[0-10]'
        WHEN AGE BETWEEN 11 AND 20 THEN '[11-20]'
        WHEN AGE BETWEEN 21 AND 30 THEN '[21-30]'
        WHEN AGE BETWEEN 31 AND 40 THEN '[31-40]'
        WHEN AGE BETWEEN 41 AND 50 THEN '[41-50]'
        WHEN AGE BETWEEN 51 AND 60 THEN '[51-60]'
        ELSE '[61+]'
        END) AS age_group,
        COUNT(age) as wizard_count
        FROM wizzard_deposits
		GROUP BY age_group
        ORDER BY wizard_count;
        
	
SELECT LEFT(first_name, 1) AS first_letter
FROM wizzard_deposits
WHERE deposit_group = 'Troll Chest'
GROUP BY LEFT(first_name, 1)
ORDER BY first_letter;

SELECT deposit_group, is_deposit_expired, AVG(deposit_interest)
FROM wizzard_deposits
WHERE deposit_start_date > '1985-01-01'
GROUP BY deposit_group, is_deposit_expired
ORDER BY deposit_group DESC, is_deposit_expired;

USE soft_uni;

SELECT department_id, MIN(salary) AS minimum_salary
FROM employees
WHERE department_id IN (2, 5, 7) AND 
hire_date > '2000-01-01'
GROUP BY department_id
ORDER BY department_id;


CREATE TABLE `hpe` AS
SELECT * FROM employees
WHERE manager_id != 42 AND salary > 30000;

UPDATE hpe 
SET salary = salary + 5000
WHERE department_id = 1;

SELECT department_id, AVG(salary) AS avg_salary
FROM hpe
GROUP BY department_id
ORDER BY department_id;

SELECT department_id, MAX(salary) AS max_salary
FROM employees
WHERE salary NOT BETWEEN 30000 AND 70000
GROUP BY department_id
ORDER BY department_id;

SELECT COUNT(*)
FROM employees
WHERE manager_id IS NULL;


SELECT e.department_id, (
	SELECT DISTINCT salary
    FROM employees AS e2
    WHERE e2.department_id = e.department_id
    ORDER BY salary DESC
    LIMIT 1 OFFSET 2
) AS third_highest_salary
 FROM employees AS e
 GROUP BY department_id
 HAVING third_highest_salary IS NOT NULL
 ORDER BY department_id;
 
 SELECT e.first_name, e.last_name, e.department_id
 FROM employees AS e
 WHERE salary > (
	SELECT AVG(salary) FROM employees AS e2
    WHERE e2.department_id = e.department_id
    GROUP BY e2.department_id
    )
ORDER BY department_id, employee_id
LIMIT 10;


SELECT department_id, SUM(salary)
FROM employees
GROUP BY department_id
ORDER BY department_id;

