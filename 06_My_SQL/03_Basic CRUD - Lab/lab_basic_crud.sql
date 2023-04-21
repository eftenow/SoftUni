USE `hotel`;

SELECT `id`, `first_name`, `last_name`, `job_title` FROM `employees`;

SELECT `id`, CONCAT_WS(' ', `first_name`,  `last_name`) AS `full_name`, `job_title`, `salary`
FROM `employees`
WHERE `SALARY` > 1000
ORDER BY `id`;


UPDATE `employees`
SET `salary` = `salary` + 100
WHERE `job_title` = 'Manager';

SELECT `salary` from `employees`;

CREATE VIEW `top_paid_employee`
AS SELECT * FROM `employees`
ORDER BY `salary`
LIMIT 1;

ALTER VIEW `top_paid_employee`
AS SELECT * FROM `employees`
ORDER BY `salary` desc
LIMIT 1;

SELECT * FROM `top_paid_employee`;

SELECT * FROM `employees`
WHERE `department_id` = 4 && `salary` >= 1000
ORDER BY `id`;

DELETE FROM `employees`
WHERE `department_id` IN (1, 2);

SELECT * FROM `employees`
ORDER BY  `id`;