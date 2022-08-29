name_and_phone = input()
phonebook = {}

while "-" in name_and_phone:
    name, phone = name_and_phone.split("-")
    phonebook[name] = phone
    name_and_phone = input()

number_of_searches = int(name_and_phone)

for search in range(number_of_searches):
    contact_name = input()
    if contact_name in phonebook:
        print(f"{contact_name} -> {phonebook[contact_name]}")
    else:
        print(f"Contact {contact_name} does not exist.")
