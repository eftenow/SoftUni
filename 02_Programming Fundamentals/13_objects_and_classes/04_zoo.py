class Zoo:
    __animals = 0

    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.mammals = []
        self.fishes = []
        self.birds = []

    def add_animal(self, name, species):
        if species == "mammal":
            self.mammals.append(name)
        elif species == "fish":
            self.fishes.append(name)
        elif species == "bird":
            self.birds.append(name)
        Zoo.__animals += 1

    def get_info(self, species):
        if species == "mammal":
            return f"Mammals in {self.zoo_name}: {', '.join(self.mammals)} \nTotal animals: {Zoo.__animals}"
        elif species == "fish":
            return f"Fishes in {self.zoo_name}: {', '.join(self.fishes)} \nTotal animals: {Zoo.__animals}"
        elif species == "bird":
            return f"Birds in {self.zoo_name}: {', '.join(self.birds)} \nTotal animals: {Zoo.__animals}"


zoo_name = input()
n = int(input())
zoo = Zoo(zoo_name)

for _ in range(n):
    animal_and_specie = input().split()
    name = animal_and_specie[0]
    species = animal_and_specie[1]
    zoo.add_animal(species, name)

species_info = input()

print(zoo.get_info(species_info))
