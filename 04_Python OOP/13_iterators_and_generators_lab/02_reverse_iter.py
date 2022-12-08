class reverse_iter:
    def __init__(self, items):
        self.items = items
        self.end = 0
        self.start = len(items) - 1

    def __iter__(self):
        return self

    def __next__(self):
        while self.start >= self.end:
            item = self.items[self.start]
            self.start -= 1
            return item
        else:
            raise StopIteration()
