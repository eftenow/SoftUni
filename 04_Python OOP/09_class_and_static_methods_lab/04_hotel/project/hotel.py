class Hotel:
    def __init__(self, name):
        self.name = name
        self.rooms = []

    @property
    def guests(self):
        return sum([room.guests for room in self.rooms])

    @classmethod
    def from_stars(cls, stars_count):
        return cls(f'{stars_count} stars Hotel')

    def add_room(self, room):
        self.rooms.append(room)

    def take_room(self, room_number, people):
        room = [x for x in self.rooms if x.number == room_number][0]
        room.take_room(people)


    def free_room(self, room_number):
        room = [x for x in self.rooms if x.number == room_number][0]
        room.free_room()

    def status(self):
        free_rooms = ', '.join([str(x.number) for x in self.rooms if not x.is_taken])
        taken_rooms = ', '.join([str(x.number) for x in self.rooms if x.is_taken])

        return f"Hotel {self.name} has {self.guests} total guests\nFree rooms: {free_rooms}\nTaken rooms: {taken_rooms}"



