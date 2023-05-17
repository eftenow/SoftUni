USE camp;

CREATE TABLE mountains(
	id INT PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE peaks(
	id INT PRIMARY KEY,
    name VARCHAR(50),
    mountain_id INT,
    CONSTRAINT FOREIGN KEY(mountain_id)
    REFERENCES mountains(id)
);

SELECT v.driver_id, v.vehicle_type, CONCAT(c.first_name, ' ', c.last_name) AS 'driver_name'
FROM vehicles as v
JOIN campers as c
ON v.driver_id = c.id;

SELECT r.starting_point, r.end_point, r.leader_id, 
CONCAT(c.first_name, ' ', c.last_name) as leader_name
FROM routes as r
JOIN campers as c
ON r.leader_id = c.id;

CREATE TABLE mountains(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
);

CREATE TABLE peaks(
	id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50),
    mountain_id INT);
    
ALTER TABLE peaks
ADD CONSTRAINT fk_peaks_mountains
FOREIGN KEY (mountain_id)
REFERENCES mountains(id) ON DELETE CASCADE;