from abc import ABC, abstractmethod


class Animal:
    @abstractmethod
    def animal_sound(self):
        pass


class Cat(Animal):
    def animal_sound(self):
        return 'Meow'


class Dog(Animal):
    def animal_sound(self):
        return 'Bark'


class Chicken(Animal):
    def animal_sound(self):
        return 'Cluck'


animals = [Cat(), Dog(), Chicken()]


for animal in animals:
    print(animal.animal_sound())
