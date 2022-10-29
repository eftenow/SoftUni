import sys


def valid_position(row, col, matrix):
    if row in range(len(matrix)) and col in range(len(matrix)):
        return True


def is_knight(row, col, matrix):
    if matrix[row][col] == 'K':
        return True


def attack(row, col, matrix):
    result = 0
    if valid_position(row + 2, col + 1, matrix) and is_knight(row + 2, col + 1, matrix):
        result += 1
    if valid_position(row + 2, col - 1, matrix) and is_knight(row + 2, col - 1, matrix):
        result += 1
    if valid_position(row + 1, col + 2, matrix) and is_knight(row + 1, col + 2, matrix):
        result += 1
    if valid_position(row + 1, col - 2, matrix) and is_knight(row + 1, col - 2, matrix):
        result += 1
    if valid_position(row - 2, col + 1, matrix) and is_knight(row - 2, col + 1, matrix):
        result += 1
    if valid_position(row - 2, col - 1, matrix) and is_knight(row - 2, col - 1, matrix):
        result += 1
    if valid_position(row - 1, col + 2, matrix) and is_knight(row - 1, col + 2, matrix):
        result += 1
    if valid_position(row - 1, col - 2, matrix) and is_knight(row - 1, col - 2, matrix):
        result += 1
    return result

size = int(input())
matrix = [[x for x in input()] for i in range(size)]
minimum_knights = sys.maxsize

dead_knights = 0

while True:
    knights = {}
    for r in range(size):
        for c in range(size):
            position = matrix[r][c]
            if position == 'K':
                knights_killed = attack(r, c, matrix)
                if knights_killed:
                    knights[r, c] = knights_killed
    if not knights:
        break
    most_killed = 0
    row, col = 0, 0
    for rc, killed in knights.items():
        if killed > most_killed:
            most_killed = killed
            row, col = rc
    matrix[row][col] = '0'
    dead_knights += 1

print(dead_knights)
