countries = input().split(", ")
capitals = input().split(", ")

countries_and_capitals = dict(zip(countries, capitals))

countries_and_capitals = {print(f"{key} -> {value}") for key, value in countries_and_capitals.items()}
