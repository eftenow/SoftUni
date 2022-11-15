from spoopify_project.album import Album


class Band:
    def __init__(self, name):
        self.name = name
        self.albums = []

    def add_album(self, album: Album):
        if album not in self.albums:
            self.albums.append(album)
            return f"Band {self.name} has added their newest album {album.name}."
        return f"Band {self.name} already has {album.name} in their library."

    def remove_album(self, album_name: str):
        for album in self.albums:
            if album.name == album_name:
                if not album.published:
                    self.albums.remove(album)
                    return f"Album {album_name} has been removed."
                else:
                    return "Album has been published. It cannot be removed."
        return f'Album {album_name} is not found.'

    def details(self):
        album_details = '\n'.join([album.details() for album in self.albums])
        return f'Band {self.name}\n{album_details}'