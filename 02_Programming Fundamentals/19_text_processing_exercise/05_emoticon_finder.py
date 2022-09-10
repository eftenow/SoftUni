text = input()

emoticons = [print(f":{text[char+1]}") for char in range(len(text)) if text[char] == ":"]
