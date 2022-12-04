from project.car.car import Car


class MuscleCar(Car):
    MINIMUM = 250
    MAXIMUM = 450

    def __init__(self, model, speed_limit):
        super().__init__(model, speed_limit)