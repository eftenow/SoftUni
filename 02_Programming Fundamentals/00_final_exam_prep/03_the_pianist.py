n = int(input())
pieces = {}

for _ in range(n):
    tokens = input().split("|")
    piece, composer, key = tokens
    pieces[piece] = [composer, key]

command = input().split("|")

while command[0] != "Stop":
    action = command[0]
    piece = command[1]
    if action == "Add":
        composer = command[2]
        key = command[3]
        if piece in pieces:
            print(f"{piece} is already in the collection!")
        else:
            print(f"{piece} by {composer} in {key} added to the collection!")
            pieces[piece] = [composer, key]
    elif action == "Remove":
        if piece in pieces:
            pieces.pop(piece)
            print(f"Successfully removed {piece}!")
        else:
            print(f"Invalid operation! {piece} does not exist in the collection.")
    elif action == "ChangeKey":
        new_key = command[2]
        if piece in pieces:
            pieces[piece][1] = new_key
            print(f"Changed the key of {piece} to {new_key}!")
        else:
            print(f"Invalid operation! {piece} does not exist in the collection.")
    command = input().split("|")
for piece in pieces:
    composer = pieces[piece][0]
    key = pieces[piece][1]
    print(f"{piece} -> Composer: {composer}, Key: {key}")
