class custom_range:
    def __init__(self, start, end):
        self.i = start
        self.end = end

    def __iter__(self):
        return self

    def __next__(self):
        while self.i <= self.end:
            num = self.i
            self.i += 1
            return num
        else:
            raise StopIteration()
