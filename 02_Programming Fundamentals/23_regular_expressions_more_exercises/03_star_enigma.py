import re

number_of_messages = int(input())
pattern = r"[star]"
star_pattern = r"@(?P<name>[A-Za-z]+)[^->@!:]*:(?P<population>\d+)[^->@!:]*!(?P<action>[A|D])![^->@!:]*->(?P<soldiers>\d+)"
decrypted_messages = []
attacked_planets = []
destroyed_planets = []
for _ in range(number_of_messages):
    encrypted_message = input()
    matches = re.findall(pattern, encrypted_message, flags=re.I)
    stars_count = len(matches)
    decrypted_message = ""
    for letter in encrypted_message:
        new_letter = ord(letter) - stars_count
        new_letter = chr(new_letter)
        decrypted_message += new_letter
    decrypted_messages.append(decrypted_message)

for message in decrypted_messages:
    final_message = re.finditer(star_pattern, message)
    for current_message in final_message:
        name = current_message.group("name")
        action = current_message.group("action")
        if action == "A":
            attacked_planets.append(name)
        elif action == "D":
            destroyed_planets.append(name)

print(f"Attacked planets: {len(attacked_planets)}")
for planet in sorted(attacked_planets):
    print(f"-> {planet}")
print(f"Destroyed planets: {len(destroyed_planets)}")
for planet in sorted(destroyed_planets):
    print(f"-> {planet}")
