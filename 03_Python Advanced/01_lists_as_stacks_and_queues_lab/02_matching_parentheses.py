expression = input()

indexes = []

for index in range(len(expression)):
    if expression[index] == '(':
        indexes.append(index)
    elif expression[index] == ')':
        start_index = indexes.pop()
        print(expression[start_index:index+1])
