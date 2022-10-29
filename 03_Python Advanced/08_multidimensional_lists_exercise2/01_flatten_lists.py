given_lists = reversed(input().split('|'))

for l in given_lists:
    if len(l.strip()) != 0:
        print(' '.join(l.split()), end=" ")
