class take_skip:
    def __init__(self, step, count):
        self.step = step
        self.count = count
        self.num = 0

    def __iter__(self):
        return self

    def __next__(self):
        while self.num < self.count:
            res = self.num * self.step
            self.num += 1
            return res
        else:
            raise StopIteration
