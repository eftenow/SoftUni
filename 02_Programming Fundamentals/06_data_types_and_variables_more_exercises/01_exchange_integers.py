first = int(input()) # 5
second = int(input()) # 10

old_first = first
old_second = second

first = old_second
second = old_first

print(f"Before: \na = {old_first} \nb = {old_second} \nAfter: \na = {first} \nb = {second}")
