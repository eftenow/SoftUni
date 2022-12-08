class vowels:
    def __init__(self, text):
        self.text = text
        self.i = 0
        self.end = len(self.text) - 1

    def __iter__(self):
        return self

    def __next__(self):
        while self.i <= self.end:
            vowels = 'AEICUYOaeiuyo'
            letter = self.text[self.i]
            self.i += 1
            if letter in vowels:
                return letter
        else:
            raise StopIteration()
