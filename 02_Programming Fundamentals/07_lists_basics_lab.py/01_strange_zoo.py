head_position = input()
body_position = input()
tail_position = input()

zoo_list = [head_position, body_position, tail_position]
temp = zoo_list[0]
zoo_list[0] = zoo_list[2]
zoo_list[2] = temp

print(zoo_list)
