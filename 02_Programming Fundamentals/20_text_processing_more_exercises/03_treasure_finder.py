key = input().split()
command = input()

while command != "find":
    i = 0
    x = 0
    decrypted_message = ""
    while len(command) - 1 != i:
        if x > len(key) - 1:
            x = 0
        key_value = int(key[x])
        encrypted_value = ord(command[i])
        if key_value > encrypted_value:
            i = 0
            x = 0
        else:
            encrypted_value -= key_value
            decrypted_char = chr(encrypted_value)
            decrypted_message += decrypted_char
            i += 1
            x += 1
    command = input()
    decrypt_treasure = decrypted_message.split("&")
    decrypt_coordinates = decrypted_message.split("<")
    treasure_found = decrypt_treasure[1]
    coordinates_found = decrypt_coordinates[1]
    print(f"Found {treasure_found} at {coordinates_found}")
