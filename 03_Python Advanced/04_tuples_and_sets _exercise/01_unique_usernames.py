names = int(input())
unique_names = set()

for _ in range(names):
    unique_names.add(input())

print("\n".join(unique_names))
