def get_magic_triangle(num):
    matrix = [[0 for x in range(i)] for i in range(1, num + 1)]
    matrix[0][0] = 1
    for row in range(1, num):
        for col in range(row + 1):
            rows = num
            cols = row + 1
            if row - 1 in range(rows) and col - 1 in range(len(matrix[row - 1])):
                matrix[row][col] += matrix[row - 1][col - 1]

            if row - 1 in range(rows) and col in range(len(matrix[row - 1])):
                matrix[row][col] += matrix[row - 1][col]

    return matrix


get_magic_triangle(10)