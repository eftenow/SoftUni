def reverse_text(word):
    i = len(word) - 1
    while i >= 0:
        yield(word[i])
        i -= 1
    else:
        return 
