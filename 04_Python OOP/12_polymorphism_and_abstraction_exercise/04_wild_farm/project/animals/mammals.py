from project.animals.animal import Mammal


class Mouse(Mammal):
    FOODS = ['Vegetable', 'Fruit']
    ANIMAL_WEIGHT_GAIN = 0.10

    def __init__(self, name, weight, living_region):
        super().__init__(name, weight, living_region)

    def make_sound(self):
        return "Squeak"


class Dog(Mammal):
    FOODS = ['Meat']
    ANIMAL_WEIGHT_GAIN = 0.40

    def __init__(self, name, weight, living_region):
        super().__init__(name, weight, living_region)

    def make_sound(self):
        return "Woof!"


class Cat(Mammal):
    FOODS = ['Vegetable', 'Meat']
    ANIMAL_WEIGHT_GAIN = 0.30
    def __init__(self, name, weight, living_region):
        super().__init__(name, weight, living_region)

    def make_sound(self):
        return "Meow"


class Tiger(Mammal):
    FOODS = ['Meat']
    ANIMAL_WEIGHT_GAIN = 1

    def __init__(self, name, weight, living_region):
        super().__init__(name, weight, living_region)

    def make_sound(self):
        return "ROAR!!!"
