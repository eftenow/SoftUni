from project.car.car import Car


class SportsCar(Car):
    MINIMUM = 400
    MAXIMUM = 600

    def __init__(self, model, speed_limit):
        super().__init__(model, speed_limit)