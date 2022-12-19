class PhotoAlbum:
    def __init__(self, pages):
        self.pages = pages
        self.photos = [[] for x in range(pages)]

    @classmethod
    def from_photos_count(cls, photos_count: int):
        return cls(photos_count // 4)

    def add_photo(self, label):
        for row in range(len(self.photos)):
            for col in range(4):
                if len(self.photos[row]) == 4:
                    break
                self.photos[row].append(label)
                return f"{label} photo added successfully on page {row + 1} slot {len(self.photos[row])}"
        return f'No more free slots'

    def display(self):
        result = '-----------'
        for page in range(len(self.photos)):
            result += "\n" + ' '.join(["[]" for x in self.photos[page] if x != ''])
            result += '\n-----------'

        return result

