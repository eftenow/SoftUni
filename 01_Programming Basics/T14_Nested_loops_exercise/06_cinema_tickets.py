student_total = 0
standard_total = 0
kids_total = 0
projection = input()

while projection != "Finish":
    available_seats = int(input())
    seats_taken = 0

    while available_seats > seats_taken:
        ticket_type = input()
        if ticket_type == "End":
            break
        else:
            seats_taken += 1
        if ticket_type == "student":
            student_total += 1
        elif ticket_type == "standard":
            standard_total += 1
        elif ticket_type == "kid":
            kids_total += 1

    occupancy_percent = seats_taken / available_seats * 100
    print(f"{projection} - {occupancy_percent:.2f}% full.")
    projection = input()
total_tickets = kids_total + student_total + standard_total
print(f"Total tickets: {total_tickets}")
print(f"{student_total/total_tickets*100:.2f}% student tickets.")
print(f"{standard_total/total_tickets*100:.2f}% standard tickets.")
print(f"{kids_total/total_tickets*100:.2f}% kids tickets.")
