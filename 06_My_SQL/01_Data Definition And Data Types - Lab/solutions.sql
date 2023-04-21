CREATE DATABASE `gamebar`;
USE `gamebar`;

CREATE TABLE employees(
	`id` INT PRIMARY KEY,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL
);

ALTER TABLE employees MODIFY `id` INT AUTO_INCREMENT;

CREATE TABLE categories(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL
);

CREATE TABLE products(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `category_id` INT NOT NULL
);


INSERT INTO `employees` (`first_name`, `last_name`)
VALUES
	('Ivan', 'Ivanov'),
    ('Dimitar', 'Dimitrov'),
    ('Petar', 'Petrov');
 
 

ALTER TABLE `employees` ADD COLUMN `middle_name` VARCHAR(50) NOT NULL;

ALTER TABLE `products` ADD CONSTRAINT `fkcategory_id`
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`);


ALTER TABLE `employees` MODIFY COLUMN `middle_name` VARCHAR(100);
