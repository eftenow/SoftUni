class dictionary_iter:
    def __init__(self, items):
        self.items = items
        self.i = 0
        self.end = len(items) - 1

    def __iter__(self):
        return self

    def __next__(self):
        while self.i <= self.end:
            key = list(self.items)[self.i]
            val = list(self.items.values())[self.i]
            self.i += 1
            return key, val
        else:
            raise StopIteration()
