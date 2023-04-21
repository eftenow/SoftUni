CREATE DATABASE `minions`;
USE `minions`;

CREATE TABLE `minions`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `age` INT
);

CREATE TABLE `towns`(
	`town_id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL
);

ALTER TABLE `towns` CHANGE COLUMN `town_id` `id` INT;
ALTER TABLE `minions` MODIFY COLUMN `age` INT;

ALTER TABLE `minions` ADD COLUMN  `town_id` INT,
ADD CONSTRAINT `fk_minions_towns`
FOREIGN KEY (`town_id`) REFERENCES `towns`(`id`);

INSERT INTO `towns` (id, name)
VALUES
	(1, 'Sofia'),
    (2, 'Plovdiv'),
    (3, 'Varna');
    
INSERT INTO `minions` (id, name, age, town_id)
VALUES
	(1, 'Kevin', 22, 1),
	(2, 'Bob', 15, 3),
	(3, 'Steward', NULL, 2);

TRUNCATE TABLE `minions` ;
DROP TABLE `minions`, `towns`;





CREATE TABLE `people`(
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(200) NOT NULL,
    `picture` BLOB,
    `height` FLOAT(5, 2),
    `weight` FLOAT(5, 2),
    `gender` CHAR(1) NOT NULL,
    `birthdate` DATE NOT NULL,
    `biography` TEXT
);

INSERT INTO `people` (name, picture, height, weight, gender, birthdate, biography)
VALUES
	('ivan', NULL, 1.77, 80, 'm', '1997-03-03', NULL),
	('ivana', NULL, 1.75, 80, 'f', '1995-03-03', NULL),
	('ivo', NULL, 1.71, 80, 'm', '1993-03-03', NULL),
	('petar', NULL, 1.79, 80, 'm', '1992-03-03', NULL),
	('georgi', NULL, 1.74, 80, 'm', '1996-03-03', NULL);
    
    
    
    
CREATE TABLE `users`(
	`id` INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
    `username` VARCHAR(30) UNIQUE,
    `password` VARCHAR(26) UNIQUE,
    `profile_picture` BLOB,
    `last_login_time` DATE,
    `is_deleted` BOOLEAN
);

INSERT INTO `users` (username, password, profile_picture, last_login_time, is_deleted)
VALUES 
	('abc', 'abc', NULL, '2022-05-05', FALSE),
	('qwe', 'qwe', NULL, '2022-06-02', TRUE),
	('zxc', 'hddf', NULL, '2022-05-05', FALSE),
	('asd', 'asbc', NULL, '2021-05-05', TRUE),
	('fgh', 'vxcv', NULL, '2020-01-01', FALSE);
    
    
    
ALTER TABLE `users`
DROP primary key,
ADD CONSTRAINT `pk_users` PRIMARY KEY (id, username);

ALTER TABLE `users`
MODIFY COLUMN `last_login_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP;


ALTER TABLE `users`
DROP PRIMARY KEY,
ADD PRIMARY KEY (`id`),
ADD CONSTRAINT unique_username
UNIQUE (username);



DROP DATABASE `minions`;
CREATE DATABASE `Movies`;
USE `Movies`;

CREATE TABLE `directors`(
	`id` INT PRIMARY KEY  NOT NULL AUTO_INCREMENT,
    `director_name` VARCHAR(50) NOT NULL,
    `notes` TEXT
); 

CREATE TABLE `genres`(
	`id` INT PRIMARY KEY  NOT NULL AUTO_INCREMENT,
    `genre_name` VARCHAR(50) NOT NULL,
    `notes` TEXT
); 

CREATE TABLE `categories`(
	`id` INT PRIMARY KEY  NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(50) NOT NULL,
    `notes` TEXT
); 

CREATE TABLE `movies`(
	`id` INT PRIMARY KEY  NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(50) NOT NULL,
    `director_id` INT,
    `copyright_year` YEAR,
    `length` TIME,
    `genre_id` INT,
    `category_id` INT,
    `rating` FLOAT(2, 1),
    `notes` TEXT
); 


ALTER TABLE `movies` ADD CONSTRAINT `fk_movies_categories`
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`);

ALTER TABLE `movies` ADD CONSTRAINT `fk_movies_genres`
	FOREIGN KEY (`genre_id`) REFERENCES `genres`(`id`);

ALTER TABLE `movies` ADD CONSTRAINT `fk_movies_directors`
	FOREIGN KEY (`director_id`) REFERENCES `directors`(`id`);
    
INSERT INTO `directors` (id, director_name, notes)
VALUES
	(1, 'test1', 'asd'),
	(2, 'test2', 'assd'),
	(3, 'test3', 'assd'),
	(4, 'test4', 'assd'),
	(5, 'test5', 'assd');
    
INSERT INTO `genres` (id, genre_name, notes)
VALUES
	(1, 'comedy', 'assdd'),
	(2, 'action', 'asasdsd'),
	(3, 'fantasy', 'asssd'),
	(4, 'drama', 'asssd'),
	(5, 'history', 'asssd');
    
INSERT INTO `categories` (id, category_name, notes)
VALUES
	(1, 'first-category', 'assdd'),
	(2, 'second-category', 'asasdsd'),
	(3, 'third-category', 'asssd'),
	(4, 'fourth-category', 'asssd'),
	(5, 'fifth-category', 'asssd');
    
INSERT INTO `movies` (id, title, director_id, copyright_year, length, genre_id, category_id, rating, notes)
VALUES
	(1, 'first', 1, 2001, '10:01:00', 1, 1, 9.5, 'good'),
	(2, 'second', 2, 2002, '10:01:00', 2, 2, 8.5, 'not bad'),
	(3, 'third', 3, 2003, '10:01:00', 3, 3, 6.5, 'decent'),
	(4, 'fourth', 4, 2004, '10:01:00', 4, 4, 5.5, 'decent'),
	(5, 'fifth', 5, 2005, '10:01:00', 5, 5, 3.5, 'bad');
    

DROP DATABASE `movies`;
CREATE DATABASE `car_rental`;
USE `car_rental`;

CREATE TABLE `categories`(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(50) NOT NULL,
    `daily_rate` INT,
    `weekly_rate` INT,
    `monthly_rate` INT,
    `weekend_rate` INT
);

INSERT INTO `categories` (category)
VALUES
	('sedan'),
	('limo'),
	('suv');


CREATE TABLE `cars`(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `plate_number` INT NOT NULL,
    `make` VARCHAR(30),
    `model` VARCHAR(30),
    `car_year` YEAR,
    `category_id` INT,
    `doors` INT,
    `picture` BLOB,
    `car_condition` VARCHAR(10),
    `available` BOOLEAN
);

INSERT INTO `cars` (plate_number)
VALUES
	(1234),
	(4321),
	(1111);

CREATE TABLE employees(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `title` VARCHAR(30),
    `notes` TEXT
);

INSERT INTO `employees` (first_name, last_name)
VALUES
	('ivan', 'ivanov'),
	('dragan', 'draganov'),
	('stefan', 'stefanov');

CREATE TABLE customers (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `driver_license_number` INT NOT NULL,
    `full_name` VARCHAR(50) NOT NULL,
    `address` VARCHAR(50),
    `city` VARCHAR(50),
    `zip_code` INT,
    `notes` TEXT
);

INSERT INTO `customers` (driver_license_number, full_name)
VALUES
	(1234567, 'petar petrov'),
	(2345678, 'georgi georgiev'),
	(3456789, 'kiril kirilov');


CREATE TABLE rental_orders (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `employee_id` INT NOT NULL,
    `customer_id` INT NOT NULL,
    `car_id` INT,
    `car_condition` VARCHAR(10),
    `tank_level` INT,
    `kilometrage_start` INT,
    `kilometrage_end` INT,
    `total_kilometrage` INT,
    `start_date` DATE,
    `end_date` DATE,
    `total_days` INT,
    `rate_applied` INT,
    `tax_rate`INT,
    `order_status` VARCHAR(10),
    `notes` TEXT
);

INSERT INTO `rental_orders` (employee_id, customer_id)
VALUES
	(1, 1),
	(2, 2),
	(3, 3);
    
 DROP DATABASE `car_rental`;
 CREATE DATABASE `soft_uni`;
 USE `soft_uni`;
 
 CREATE TABLE `towns`(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL
 );
 
 CREATE TABLE `addresses`(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `address_text` VARCHAR(50) NOT NULL,
    `town_id` INT
 );
 
 CREATE TABLE `departments`(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL
 );
 
  CREATE TABLE `employees`(
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(50) NOT NULL,
    `middle_name` VARCHAR(50),
    `last_name` VARCHAR(50),
    `job_title` VARCHAR(50),
    `department_id` INT,
    `hire_date` DATE,
    `salary` FLOAT,
    `address_id` INT
 );
 
 INSERT INTO `towns`
VALUES
(1, 'Sofia'),
(2, 'Plovdiv'),
(3, 'Varna'),
(4, 'Burgas');

INSERT INTO `departments`
VALUES
(1, 'Engineering'),
(2, 'Sales'),
(3, 'Marketing'),
(4, 'Software Development'),
(5, 'Quality Assurance');
 
INSERT INTO `employees`(`id`, `first_name`,`middle_name`, `last_name`, `job_title`, `department_id`, `hire_date`, `salary`, `address_id`)
VALUES
(1, 'Ivan', 'Ivanov', 'Ivanov', '.NET Developer', 4, '2013-02-01', '3500.00', NULL),
(2, 'Petar', 'Petrov', 'Petrov', 'Senior Engineer', 1, '2004-03-02', '4000.00', NULL),
(3, 'Maria', 'Petrova', 'Ivanova', 'Intern', 5, '2016-08-28', '525.25', NULL),
(4, 'Georgi', 'Terziev', 'Ivanov', 'CEO', 2, '2007-12-09', '3000.00', NULL),
(5, 'Peter', 'Pan', 'Pan', 'Intern', 3, '2016-08-28', '599.88', NULL);


SELECT * FROM `towns`;
SELECT * FROM `departments`;
SELECT * FROM `employees`;

SELECT * FROM `towns` ORDER BY `name`;
SELECT * FROM `departments` ORDER BY `name`;
SELECT * FROM `employees` ORDER BY `salary` DESC;

SELECT `name` FROM `towns` ORDER BY `name`;
SELECT `name` FROM `departments` ORDER BY `name`;
SELECT `first_name`, `last_name`, `job_title`, `salary` FROM `employees` ORDER BY `salary` DESC;


UPDATE `employees`
SET `salary` = `salary` * 1.1;

SELECT `salary` FROM `employees`;