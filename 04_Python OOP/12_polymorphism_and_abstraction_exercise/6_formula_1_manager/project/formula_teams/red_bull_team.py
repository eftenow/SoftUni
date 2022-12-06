from project.formula_teams.formula_team import FormulaTeam


class RedBullTeam(FormulaTeam):
    def __init__(self, budget):
        super().__init__(budget)

    def calculate_revenue_after_race(self, race_pos: int):
        expenses_per_race = 250000
        race_revenue = 0
        if race_pos == 1:
            race_revenue += 1500000
        elif race_pos == 2:
            race_revenue += 800000
        if race_pos == 10 or race_pos == 9:
            race_revenue += 10000
        elif race_pos <= 8:
            race_revenue += 20000
        race_revenue -= expenses_per_race
        self.budget += race_revenue
        return f"The revenue after the race is {race_revenue}$. Current budget {self.budget}$"