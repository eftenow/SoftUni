class sequence_repeat:
    def __init__(self, text, count):
        self.text = text
        self.count = count
        self.start = 0

    def __iter__(self):
        return self

    def __next__(self):
        while self.start < self.count:
            i = self.start % len(self.text)
            self.start += 1


            return self.text[i]
        else:
            raise StopIteration()
