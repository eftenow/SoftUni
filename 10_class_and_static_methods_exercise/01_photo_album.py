from math import ceil

class PhotoAlbum:
    PHOTOS_PER_PAGES = 4


    def __init__(self, pages):
        self.pages = pages
        self.photos = [[] for x in range(pages)]

    @classmethod
    def from_photos_count(cls, photos_count: int):
        return cls(ceil(photos_count / PhotoAlbum.PHOTOS_PER_PAGES))

    def add_photo(self, label):
        for page in range(len(self.photos)):
            for photo in range(PhotoAlbum.PHOTOS_PER_PAGES):
                if len(self.photos[page]) == PhotoAlbum.PHOTOS_PER_PAGES:
                    break
                self.photos[page].append(label)
                return f"{label} photo added successfully on page {page + 1} slot {len(self.photos[page])}"
        return f'No more free slots'

    def display(self):
        result = '-----------'
        for page in range(len(self.photos)):
            result += "\n" + ' '.join(["[]" for x in self.photos[page] if x != ''])
            result += '\n-----------'

        return result
