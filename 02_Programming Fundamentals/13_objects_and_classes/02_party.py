class Party:
    def __init__(self):
        self.people = 0
        self.names = []


person = input()
party = Party()
while person != "End":
    party.people += 1
    party.names.append(person)
    person = input()

print(f'Going: {", ".join(party.names)}')
print(f'Total: {party.people}')
