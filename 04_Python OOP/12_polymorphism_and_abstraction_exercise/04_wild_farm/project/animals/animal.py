from abc import ABC, abstractmethod

from project.food import Food


class Animal(ABC):
    FOODS = []
    ANIMAL_WEIGHT_GAIN = 0

    def __init__(self, name, weight):
        self.name = name
        self.weight = weight
        self.food_eaten = 0

    @abstractmethod
    def make_sound(self):
        pass

    def feed(self, food: Food):
        if food.__class__.__name__ not in self.FOODS:
            return f'{self.__class__.__name__} does not eat {food.__class__.__name__}!'
        self.weight += self.ANIMAL_WEIGHT_GAIN * food.quantity
        self.food_eaten += food.quantity


class Bird(Animal):
    def make_sound(self):
        pass

    def __init__(self, name, weight, wing_size):
        super().__init__(name, weight)
        self.wing_size = wing_size

    def __repr__(self):
        return f"{self.__class__.__name__} [{self.name}, {self.wing_size}, {self.weight}, {self.food_eaten}]"


class Mammal(Animal):
    def make_sound(self):
        pass

    def __init__(self, name, weight, living_region):
        super().__init__(name, weight)
        self.living_region = living_region

    def __repr__(self):
        return f"{self.__class__.__name__} [{self.name}, {self.weight}, {self.living_region}, {self.food_eaten}]"