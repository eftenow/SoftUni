def words_sorting(*args):
    words_dict = {}
    sum_of_all_values = 0
    result = ''
    for current_word in args:
        numeric_value = 0
        for letter in current_word:
            numeric_value += ord(letter)
        words_dict[current_word] = numeric_value
        sum_of_all_values += numeric_value
    if sum_of_all_values % 2 != 0:  # odd
        for word, value in sorted(words_dict.items(), key=lambda x: -x[1]):
            result += f'{word} - {value}\n'
    else:
        for word, value in sorted(words_dict.items(), key=lambda x: x[0]):
            result += f'{word} - {value}\n'

    return result

print(
    words_sorting(
        'cacophony',
        'accolade'
  ))

