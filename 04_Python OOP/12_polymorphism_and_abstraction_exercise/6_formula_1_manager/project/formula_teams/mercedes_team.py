from project.formula_teams.formula_team import FormulaTeam


class MercedesTeam(FormulaTeam):
    def __init__(self, budget):
        super().__init__(budget)

    def calculate_revenue_after_race(self, race_pos: int):
        expenses_per_race = 200000
        race_revenue = 0
        if race_pos == 1:
            race_revenue += 1000000
        elif race_pos == 2 or race_pos == 3:
            race_revenue += 500000

        if race_pos == 7 or race_pos == 6:
            race_revenue += 50000
        elif race_pos <= 5:
            race_revenue += 100000
        race_revenue -= expenses_per_race
        self.budget += race_revenue
        return f"The revenue after the race is {race_revenue}$. Current budget {self.budget}$"