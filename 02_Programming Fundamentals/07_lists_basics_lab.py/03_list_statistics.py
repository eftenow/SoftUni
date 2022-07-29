numbers = int(input())
count_of_positives = 0
sum_of_negatives = 0
negatives_list = []
positives_list = []

for number in range(numbers):
    current_number = int(input())
    if current_number <= 0:
        sum_of_negatives += current_number
        negatives_list.append(current_number)
    else:
        count_of_positives += 1
        positives_list.append(current_number)
print(positives_list)
print(negatives_list)
print(f"Count of positives: {count_of_positives}")
print(f"Sum of negatives: {sum_of_negatives}")
