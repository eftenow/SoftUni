men_clients = int(input())
women_clients = int(input())
amount_of_tables = int(input())
tables_taken = 0
all_tables_taken = False

for man in range(1, men_clients+1):
    for woman in range(1, women_clients+1):
        tables_taken += 1
        if tables_taken > amount_of_tables:
            all_tables_taken = True
            break
        print(f"({man} <-> {woman})", end=' ')
    if all_tables_taken:
        break
