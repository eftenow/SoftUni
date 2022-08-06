import re

text = input()
pattern = r"(::|\*\*)(?P<emoji>[A-Z][a-z]{2,})\1"
threshold = 1
cool_emojis = []
emojis = re.finditer(pattern, text)
emojis_count = 0
for char in text:
    if char.isdigit():
        threshold *= int(char)
print(f"Cool threshold: {threshold}")


for emoji in emojis:
    emojis_count += 1
    emoji_value = 0
    current_emoji = emoji.group("emoji")
    for letter in current_emoji:
        letter_value = ord(letter)
        emoji_value += letter_value
    if emoji_value > threshold:
        cool_emojis.append(emoji.group())

print(f"{emojis_count} emojis found in the text. The cool ones are:")
cool_emojis = [print(x) for x in cool_emojis]
