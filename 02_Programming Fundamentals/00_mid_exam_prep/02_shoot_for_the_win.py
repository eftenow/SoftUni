list_of_targets = list(map(int, input().split()))
command = input()
shot_targets = 0

while command != "End":
    target_index = int(command)
    if len(list_of_targets) <= target_index:
        command = input()
        continue
    current_target_value = int(list_of_targets[target_index])
    if current_target_value != -1:
        list_of_targets[target_index] = -1
        for current_index in range(len(list_of_targets)):
            current_number = list_of_targets[current_index]
            if current_number == -1:
                continue
            if current_number > current_target_value:
                current_number -= current_target_value
            else:
                current_number += current_target_value
            list_of_targets[current_index] = current_number
    shot_targets += 1
    command = input()
list_of_targets = list(map(str, list_of_targets))
print(f"Shot targets: {shot_targets} -> {' '.join(list_of_targets)}")