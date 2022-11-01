def operate(operator, *args):
    result = 1
    if ('-' or '+') in operator:
        result = 0

    if operator == '+':
        result = sum(args)
    elif operator == "-":
        result = args[0] - args[1]
        if len(args) > 2:
            for num in range(2, len(args)):
                result -= args[num]

    elif operator == "/":
        result = args[0] / args[1]
        if len(args) > 2:
            for num in range(2, len(args)):
                result /= args[num]
    elif operator == "*":
        result = 1
        for num in args:
            result *= num
    return result
