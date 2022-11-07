import re
from collections import deque

tom_jerry = deque(input().split(', '))
first, second = tom_jerry
size = 6
matrix = [[x for x in input().split()] for i in range(size)]


while True:
    player = tom_jerry.popleft()
    row, col = [int(x) for x in re.findall(r'\d', input())]
    position = matrix[row][col]
    if player == 'skip':
        tom_jerry.append(tom_jerry.popleft())
    elif position == 'E':
        print(f"{player} found the Exit and wins the game!" )
        break
    elif position == 'T':
        winner = tom_jerry[0]
        if winner == 'skip':
            winner = tom_jerry[1]
        print(f"{player} is out of the game! The winner is {winner}." )
        break
    elif position == 'W':
        print(f'{player} hits a wall and needs to rest.')
        tom_jerry.append('skip')
    if player != 'skip':
        tom_jerry.append(player)



