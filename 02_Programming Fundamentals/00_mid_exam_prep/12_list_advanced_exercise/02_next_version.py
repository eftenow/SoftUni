version = input().split(".")
version = int(''.join(version)) + 1
version = ".".join(str(version))
print(version)