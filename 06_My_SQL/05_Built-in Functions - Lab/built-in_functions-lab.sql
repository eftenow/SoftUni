SELECT `title` FROM `books`
WHERE `title` LIKE "The%";

SELECT REPLACE(`title`, 'The', '***') AS 'title'
FROM `books`
WHERE `title` LIKE "The%";

SELECT FORMAT(SUM(`cost`), 2) AS 'Total Cost'
FROM `books`;

SELECT CONCAT(`first_name`, ' ', `last_name`) AS 'Full Name',
TIMESTAMPDIFF(DAY, `born`, `died`) AS 'Days Lived'
FROM `authors`;

SELECT `title` FROM `books`
WHERE `title` LIKE '%Harry Potter%';