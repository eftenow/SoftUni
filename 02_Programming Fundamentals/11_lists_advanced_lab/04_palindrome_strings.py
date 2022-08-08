words = input().split(" ")
given_palindrome = input()

words_sorted = list(filter(lambda x: x == x[::-1], words))
found_palindrome = words_sorted.count(given_palindrome)
print(words_sorted)
print(f"Found palindrome {found_palindrome} times")
