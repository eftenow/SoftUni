class Town:
    latitude = ""
    longitude = ""

    def __init__(self, name: str):
        self.name = name

    def set_latitude(self, latitude):
        Town.latitude += latitude

    def set_longitude(self, longitude):
        Town.longitude += longitude

    def __repr__(self):
        return f'Town: {self.name} | Latitude: {Town.latitude} | Longitude: {Town.longitude}'
