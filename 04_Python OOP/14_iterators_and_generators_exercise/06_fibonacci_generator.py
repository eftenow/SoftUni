def fibonacci():
    current_num = 1
    previous_num = 0

    while True:
        yield (previous_num)
        result = current_num + previous_num
        current_num = previous_num
        previous_num = result
