from project.animals.animal import Bird


class Owl(Bird):
    FOODS = ['Meat']
    ANIMAL_WEIGHT_GAIN = 0.25

    def __init__(self, name, weight, wing_size):
        super().__init__(name, weight, wing_size)

    def make_sound(self):
        return "Hoot Hoot"


class Hen(Bird):
    FOODS = ['Vegetable', 'Fruit', 'Meat', 'Seed']
    ANIMAL_WEIGHT_GAIN = 0.35

    def __init__(self, name, weight, wing_size):
        super().__init__(name, weight, wing_size)
        self.wing_size = wing_size

    def make_sound(self):
        return "Cluck"
