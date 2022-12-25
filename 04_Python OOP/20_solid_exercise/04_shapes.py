from abc import ABC, abstractmethod


class Shape(ABC):
    @abstractmethod
    def get_area(self):
        pass


class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def get_area(self):
        return self.width * self.height


class AreaCalculator:
    def __init__(self, shapes):
        assert isinstance(shapes, list), "`shapes` should be of type `list`."
        self.shapes = shapes

    @property
    def total_area(self):
        return sum(shape.get_area() for shape in self.shapes)


shapes = [Rectangle(2, 3), Rectangle(1, 6), Rectangle(1, 60)]
calculator = AreaCalculator(shapes)
print("The total area is: ", calculator.total_area)
