tickets = input()
tickets = [ticket.strip() for ticket in tickets.split(",")] # !!$
symbols = ["@", "#", "$", "^"]

for ticket in tickets:
    first_streak = 0
    second_streak = 0
    symbols_count_first = 0
    symbols_count_second = 0
    symbol_first = ""
    symbol_second = ""
    if len(ticket) != 20:
        print("invalid ticket")
    else:
        first_half = ticket[:(len(ticket)//2)]
        second_half = ticket[(len(ticket)//2):]
        for char in first_half:
            if char in symbols:
                if char != symbol_first:
                    if first_streak <= symbols_count_first:
                        symbol_first = char
                    symbols_count_first = 1
                else:
                    symbols_count_first += 1
                    if symbols_count_first > first_streak:
                        first_streak = symbols_count_first
            else:
                if symbols_count_first > first_streak:
                    first_streak = symbols_count_first
                symbols_count_first = 0

        for char in second_half:
            if char in symbols:
                if char != symbol_second:
                    if second_streak <= symbols_count_second:
                        symbol_second = char
                    symbols_count_second = 1
                else:
                    symbols_count_second += 1
                    if symbols_count_second > second_streak:
                        second_streak = symbols_count_second
            else:
                if symbols_count_second > second_streak:
                    second_streak = symbols_count_second
                symbols_count_second = 0

        uninterrupted_match_length = min(first_streak, second_streak)

        if first_streak == 10 and second_streak == 10 and symbol_first == symbol_second:
            print(f'ticket "{ticket}" - {symbols_count_first}{symbol_first} Jackpot!')

        elif 6 <= first_streak <= 10 and 6 <= second_streak <= 10 and symbol_first == symbol_second:
            print(f'ticket "{ticket}" - {uninterrupted_match_length}{symbol_first}')
        else:
            print(f'ticket "{ticket}" - no match')
