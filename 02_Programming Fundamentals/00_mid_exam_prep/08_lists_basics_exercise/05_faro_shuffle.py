cards = input().split()
shuffles = int(input())
first_card = cards[0]
last_card = cards[-1]

new_deck = []

for shuffle in range(shuffles):
    new_deck = []
    first_half = cards[:len(cards)//2]
    second_half = cards[len(cards)//2:len(cards)]
    for index in range(len(first_half)):
        new_deck.append(first_half[index])
        new_deck.append(second_half[index])
    cards = new_deck
print(new_deck)