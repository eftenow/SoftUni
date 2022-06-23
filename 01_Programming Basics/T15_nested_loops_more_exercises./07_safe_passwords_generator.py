a = int(input())
b = int(input())
passwords = int(input())
sum = a * b 
count = 0
check = False
 
while not check:
  for i in range(35, 56):
    for j in range(64, 97):
      for k in range(1, a + 1):
        for m in range(1, b + 1):
          if count == sum or count == passwords:
            check = True
            break
          else:
            result = chr(i) + chr(j) + \
                     str(k) + str(m) + \
                     chr(j) + chr(i)
            print(result, end="|")
            
            i += 1
            j += 1
            if i > 55:
              i = 35
            if j > 96:
              j = 64
            count += 1
