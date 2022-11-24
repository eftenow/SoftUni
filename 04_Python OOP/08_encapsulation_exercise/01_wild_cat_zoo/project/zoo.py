from project.animal import Animal
from project.worker import Worker


class Zoo:
    def __init__(self, name, budget, animal_capacity, workers_capacity):
        self.name = name
        self.__budget = budget
        self.__animal_capacity = animal_capacity
        self.__workers_capacity = workers_capacity
        self.animals = []
        self.workers = []

    def add_animal(self, animal: Animal, price):
        if self.__budget >= price and self.__animal_capacity > 0:
            self.animals.append(animal)
            self.__budget -= price
            self.__animal_capacity -= 1
            return f'{animal.name} the {animal.__class__.__name__} added to the zoo'

        elif self.__budget < price:
            return 'Not enough budget'

        elif self.__animal_capacity == 0:
            return 'Not enough space for animal'

    def hire_worker(self, worker: Worker):
        if self.__workers_capacity > len(self.workers):
            self.workers.append(worker)
            return f'{worker.name} the {worker.__class__.__name__} hired successfully'
        return 'Not enough space for worker'

    def fire_worker(self, worker_name):
        for worker in self.workers:
            if worker.name == worker_name:
                self.workers.remove(worker)
                return f"{worker_name} fired successfully"
        return f"There is no {worker_name} in the zoo"

    def pay_workers(self):
        money_needed = 0
        for worker in self.workers:
            money_needed += worker.salary

        if self.__budget >= money_needed:
            self.__budget -= money_needed
            return f"You payed your workers. They are happy. Budget left: {self.__budget}"
        return "You have no budget to pay your workers. They are unhappy"

    def tend_animals(self):
        money_needed = 0
        for animal in self.animals:
            money_needed += animal.money_for_care

        if self.__budget >= money_needed:
            self.__budget -= money_needed
            return f"You tended all the animals. They are happy. Budget left: {self.__budget}"
        return "You have no budget to tend the animals. They are unhappy."

    def profit(self, amount):
        self.__budget += amount

    def animals_status(self):
        result = f'You have {len(self.animals)} animals'
        lions = [x for x in self.animals if x.__class__.__name__ == 'Lion']
        tigers = [x for x in self.animals if x.__class__.__name__ == 'Tiger']
        cheetahs = [x for x in self.animals if x.__class__.__name__ == 'Cheetah']
        zoo = {'Lions': lions, 'Tigers': tigers, 'Cheetahs': cheetahs}
        for animal_type, animals in zoo.items():
            result += '\n' + f'----- {len(animals)} {animal_type}:'
            for animal in animals:
                result += '\n' + animal.__repr__()

        return result

    def workers_status(self):
        result = f'You have {len(self.workers)} workers'
        keepers = [x for x in self.workers if x.__class__.__name__ == 'Keeper']
        caretakers = [x for x in self.workers if x.__class__.__name__ == 'Caretaker']
        vets = [x for x in self.workers if x.__class__.__name__ == 'Vet']
        zoo_workers = {'Keepers': keepers, 'Caretakers': caretakers, 'Vets': vets}
        for worker_type, workers in zoo_workers.items():
            result += '\n' + f'----- {len(workers)} {worker_type}:'
            for worker in workers:
                result += '\n' + worker.__repr__()

        return result