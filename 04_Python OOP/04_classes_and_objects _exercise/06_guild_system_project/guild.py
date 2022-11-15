from project_guild_system.player import Player


class Guild:
    def __init__(self, name):
        self.name = name
        self.players = []

    def assign_player(self, player: Player):
        if player.guild == 'Unaffiliated':
            player.guild = self.name
            self.players.append(player)
            return f"Welcome player {player.name} to the guild {self.name}"
        elif player.guild == self.name:
            return f"Player {player.name} is already in the guild."
        else:
            return f"Player {player.name} is in another guild."

    def kick_player(self, player_name: str):
        for player in self.players:
            if player.name == player_name:
                self.players.remove(player)
                player.guild = 'Unaffiliated'
                return f'Player {player_name} has been removed from the guild.'
        return f"Player {player_name} is not in the guild."

    def guild_info(self):
        guild_members = ''
        for player in self.players:
            guild_members += '\n' + player.player_info()
        return f'Guild: {self.name}{guild_members}'