class countdown_iterator:
    def __init__(self, count):
        self.count = count

    def __iter__(self):
        return self

    def __next__(self):
        while self.count >= 0:
            num = self.count
            self.count -= 1
            return num

        else:
            raise StopIteration
