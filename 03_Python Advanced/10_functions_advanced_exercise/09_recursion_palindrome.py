def palindrome(word, ind):
    if ind == len(word) // 2:
        return f'{word} is a palindrome'
    right_side = word[ind]
    left_side = word[len(word) - ind - 1]

    if right_side != left_side:
        return f'{word} is not a palindrome'

    return palindrome(word, ind + 1)



print(palindrome("abcba", 0))
