start = int(input())
end = int(input())
even_number = "2", "4", "6", "8"
odd_number = "3", "5", "7", "9"

for n1 in range(start, end+1):
    for n2 in range(start, end+1):
        for n3 in range(start, end+1):
            for n4 in range(start, end+1):
                if n1 % 2 == 0 and n4 % 2 !=0 or n1 % 2 != 0 and n4 % 2 ==0:
                    if n1 > n4:
                        if (n2 + n3) % 2 == 0:
                            print(f"{n1}{n2}{n3}{n4}", end=' ')
