from project.car.muscle_car import MuscleCar
from project.car.sports_car import SportsCar
from project.driver import Driver
from project.race import Race


class Controller:
    def __init__(self):
        self.cars = []
        self.drivers = []
        self.races = []

    def find_car_by_model(self, car_model):
        return next(filter(lambda car: car.model == car_model, self.cars), None)

    def get_driver_by_name(self, name):
        return next(filter(lambda driver: driver.name == name, self.drivers), None)

    def get_race_by_race_name(self, race_name):
        return next(filter(lambda race: race.name == race_name, self.races), None)

    def create_car(self, car_type, model, speed_limit):
        car_exists = self.find_car_by_model(model)
        if car_exists:
            raise Exception(f'Car {model} is already created!')
        valid_types = {'MuscleCar': MuscleCar, 'SportsCar': SportsCar}
        if car_type in valid_types:
            new_car = valid_types[car_type](model, speed_limit)
            self.cars.append(new_car)
            return f"{car_type} {model} is created."

    def create_driver(self, driver_name):
        driver_exists = self.get_driver_by_name(driver_name)
        if driver_exists:
            raise Exception(f'Driver {driver_name} is already created!')
        driver = Driver(driver_name)
        self.drivers.append(driver)
        return f"Driver {driver_name} is created."

    def create_race(self, race_name):
        race_exists = self.get_race_by_race_name(race_name)
        if race_exists:
            raise Exception(f"Race {race_name} is already created!")
        race = Race(race_name)
        self.races.append(race)
        return f"Race {race_name} is created."

    def add_car_to_driver(self, driver_name, car_type):
        driver = self.get_driver_by_name(driver_name)
        if not driver:
            raise Exception(f"Driver {driver_name} could not be found!")
        cars = [car for car in self.cars if type(car).__name__ == car_type and not car.is_taken]
        if not cars:
            raise Exception(f"Car {car_type} could not be found!")
        new_car = cars.pop()
        new_car.is_taken = True
        if driver.car is not None:
            old_car = driver.car
            old_car.is_taken = False
            driver.car = new_car
            return f"Driver {driver_name} changed his car from {old_car.model} to {new_car.model}."
        driver.car = new_car
        return f"Driver {driver_name} chose the car {new_car.model}."

    def add_driver_to_race(self, race_name, driver_name):
        driver = self.get_driver_by_name(driver_name)
        race = self.get_race_by_race_name(race_name)
        if not race:
            raise Exception(f"Race {race_name} could not be found!")
        if not driver:
            raise Exception(f"Driver {driver_name} could not be found!")
        if driver.car is None:
            raise Exception(f"Driver {driver_name} could not participate in the race!")
        if driver.name in [d.name for d in race.drivers]:
            return f"Driver {driver_name} is already added in {race_name} race."
        race.drivers.append(driver)
        return f"Driver {driver_name} added in {race_name} race."

    def start_race(self, race_name):
        race = self.get_race_by_race_name(race_name)
        if not race:
            raise Exception(f"Race {race_name} could not be found!")
        if len(race.drivers) < 3:
            raise Exception(f"Race {race_name} cannot start with less than 3 participants!")
        winners = [driver for driver in sorted(race.drivers, key=lambda driver: -driver.car.speed_limit)][:3]
        result = ''
        for driver in winners:
            driver.number_of_wins += 1
            result += f"Driver {driver.name} wins the {race_name} race with a speed of {driver.car.speed_limit}.\n"
        return result.strip()




controller = Controller()
print(controller.create_driver("Peter"))
print(controller.create_car("SportsCar", "Porsche 718 Boxster", 470))
print(controller.add_car_to_driver("Peter", "SportsCar"))
print(controller.create_car("SportsCar", "Porsche 911", 580))
print(controller.add_car_to_driver("Peter", "SportsCar"))
print(controller.create_car("MuscleCar", "BMW ALPINA B7", 290))
print(controller.create_car("MuscleCar", "Mercedes-Benz AMG GLA 45", 420))
print(controller.create_driver("John"))
print(controller.create_driver("Jack"))
print(controller.create_driver("Kelly"))
print(controller.add_car_to_driver("Kelly", "MuscleCar"))
print(controller.add_car_to_driver("Jack", "MuscleCar"))
print(controller.add_car_to_driver("John", "SportsCar"))
print(controller.create_race("Christmas Top Racers"))
print(controller.add_driver_to_race("Christmas Top Racers", "John"))
print(controller.add_driver_to_race("Christmas Top Racers", "Jack"))
print(controller.add_driver_to_race("Christmas Top Racers", "Kelly"))
print(controller.add_driver_to_race("Christmas Top Racers", "Peter"))
print(controller.start_race("Christmas Top Racers"))
[print(d.name, d.number_of_wins) for d in controller.drivers]

