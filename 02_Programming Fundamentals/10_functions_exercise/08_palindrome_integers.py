def palindromes(numbers):
    list_of_palindromes = []
    for num in numbers:
        is_palindrome = False
        if num == num[::-1]:
            is_palindrome = True
        list_of_palindromes.append(is_palindrome)
    return list_of_palindromes


numbers = input().split(", ")
output = [print(x) for x in palindromes(numbers)]
