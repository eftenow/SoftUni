DELIMITER $$

CREATE function ufn_count_employees_by_town(town_name VARCHAR(30))
RETURNS INT
DETERMINISTIC
	BEGIN
		RETURN(
        SELECT count(e.first_name)
		FROM employees as e
		JOIN addresses as a ON e.address_id = a.address_id
		JOIN towns as t ON t.town_id = a.town_id
		WHERE t.name = town_name
        );
    END$$
    
DELIMITER ;

SELECT ufn_count_employees_by_town('Sofia');

DELIMITER $$

CREATE PROCEDURE usp_raise_salaries(department_name VARCHAR(30))
BEGIN
	UPDATE employees AS e
	JOIN departments AS d ON e.department_id = d.department_id
	SET e.salary = e.salary * 1.05
	WHERE d.name = department_name;
END$$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE usp_raise_salary_by_id(id INT)
BEGIN
    IF id IN (SELECT employee_id FROM employees) THEN
    UPDATE employees AS e
    SET e.salary = e.salary * 1.05
    WHERE e.employee_id = id;
	END IF;
END$$


DELIMITER ;
CALL usp_raise_salary_by_id(294);


CREATE TABLE deleted_employees(
	employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    middle_name VARCHAR(30),
    job_title VARCHAR(30),
    department_id INT,
    salary DECIMAL(19,4)
    );

DELIMITER $$

CREATE TRIGGER tr_deleted_employees
BEFORE DELETE ON employees
FOR EACH ROW
BEGIN
	INSERT INTO deleted_employees(first_name, last_name, middle_name, job_title, department_id, salary)
    VALUES
    ( OLD.first_name, OLD.last_name, OLD.middle_name, OLD.job_title, OLD.department_id, OLD.salary);
END$$

DELIMITER ;

DELETE FROM employees as e
WHERE e.employee_id = 5;