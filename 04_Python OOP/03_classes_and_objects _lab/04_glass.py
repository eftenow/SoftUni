class Glass:
    capacity = 250

    def __init__(self, content=0):
        self.content = content

    def fill(self, ml):
        space_left = Glass.capacity - self.content

        if space_left >= ml:
            self.content += ml
            return f"Glass filled with {ml} ml"

        else:
            return f'Cannot add {ml} ml'

    def empty(self):
        self.content = 0
        return 'Glass is now empty'

    def info(self):
        return f'{Glass.capacity - self.content} ml left'
