from project.formula_teams.mercedes_team import MercedesTeam
from project.formula_teams.red_bull_team import RedBullTeam


class F1SeasonApp:
    def __init__(self):
        self.red_bull_team = None
        self.mercedes_team = None

    def register_team_for_season(self, team_name, budget):
        valid_names = {'Red Bull': RedBullTeam, 'Mercedes': MercedesTeam}
        if team_name not in valid_names:
            raise ValueError("Invalid team name!")
        new_team = valid_names[team_name](budget)
        if team_name == 'Red Bull':
            self.red_bull_team = new_team
        elif team_name == 'Mercedes':
            self.mercedes_team = new_team
        return f"{team_name} has joined the new F1 season."

    def new_race_results(self, race_name: str, red_bull_pos: int, mercedes_pos: int):
        if not self.mercedes_team or not self.red_bull_team:
            raise Exception("Not all teams have registered for the season.")
        result = f'Red Bull: {self.red_bull_team.calculate_revenue_after_race(red_bull_pos)}. '
        result += f'Mercedes: {self.mercedes_team.calculate_revenue_after_race(mercedes_pos)}. '
        better_team = 'Red Bull'
        if red_bull_pos > mercedes_pos:
            better_team = 'Mercedes'
        result += f"{better_team} is ahead at the {race_name} race."
        return result



f1_season = F1SeasonApp()

print(f1_season.register_team_for_season("Red Bull", 2000000))
print(f1_season.register_team_for_season("Mercedes", 2500000))
print(f1_season.new_race_results("Nurburgring", 1, 7))
print(f1_season.new_race_results("Silverstone", 10, 1))
