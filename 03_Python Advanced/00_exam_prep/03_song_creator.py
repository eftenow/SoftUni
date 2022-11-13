def add_songs(*args):
    result = ''
    songs = {}
    for song_ind in range(len(args)):
        song_name = args[song_ind][0]
        if song_name not in songs:
            songs[song_name] = []
        for line in args[song_ind][1]:
            songs[song_name].append(line)
    for tite, lyrics in songs.items():
        result += (f'- {tite}\n')
        for line in lyrics:
            result += f'{line}\n'
    return result.strip()

print(add_songs(
    ("Love of my life",
     ["Love of my life, you've hurt me",
      "You've broken my heart, and now you leave me",
      "Love of my life, can't you see?",
      "Bring it back, bring it back"]),
    ("Beat It", []),
    ("Love of my life",
     ["Don't take it away from me",
      "Because you don't know",
      "What it means to me"]),
    ("Dream On",
     ["Every time that I look in the mirror"]),
))


