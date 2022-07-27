number = int(input())
counter = 0
bracket_count = 0
is_unbalanced = False
for i in range(number):
    gg = input()
    if gg == "(" or gg == ")":
        if gg == "(":
            bracket_count += 1
            if bracket_count % 2 == 0: ### Нечетно ->>> (  ; Четно ->>> )
                is_unbalanced = True
                break
        elif gg == ")":
            bracket_count += 1
            if bracket_count % 2 != 0:
                is_unbalanced = True
                break
    else:
        continue
if is_unbalanced:
    print("UNBALANCED")
else:
    print("BALANCED")
