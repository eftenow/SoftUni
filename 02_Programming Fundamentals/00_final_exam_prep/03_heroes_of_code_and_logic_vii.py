number_of_chars = int(input())
heroes = {}

for _ in range(number_of_chars):
    info = input().split()
    name = info[0]
    health = int(info[1])
    mana = int(info[2])
    heroes[name] = [health, mana]

command = input().split(" - ")
while command[0] != "End":
    action = command[0]
    hero = command[1]
    current_mana = heroes[hero][1]
    current_hp = heroes[hero][0]
    if action == "CastSpell":
        mp_needed = int(command[2])
        spell = command[3]
        if current_mana >= mp_needed:
            heroes[hero][1] -= mp_needed
            print(f"{hero} has successfully cast {spell} and now has {heroes[hero][1]} MP!")
        else:
            print(f"{hero} does not have enough MP to cast {spell}!")
    elif action == "TakeDamage":
        damage_taken = int(command[2])
        attacker = command[3]
        heroes[hero][0] -= damage_taken
        if heroes[hero][0] > 0:
            print(f"{hero} was hit for {damage_taken} HP by {attacker} and now has {heroes[hero][0]} HP left!")

        else:
            print(f"{hero} has been killed by {attacker}!")
            heroes.pop(hero)
    elif action == "Recharge":
        mana_recovered = int(command[2])
        if mana_recovered + current_mana > 200:
            mana_recovered = 200 - current_mana
        print(f"{hero} recharged for {mana_recovered} MP!")
        heroes[hero][1] += mana_recovered
    elif action == "Heal":
        health_recovered = int(command[2])
        if health_recovered + current_hp > 100:
            health_recovered = 100 - current_hp
        print(f"{hero} healed for {health_recovered} HP!")
        heroes[hero][0] += health_recovered

    command = input().split(" - ")

for hero in heroes:
    mp = heroes[hero][1]
    hp = heroes[hero][0]
    print(f"{hero}\n  HP: {hp}\n  MP: {mp}")
