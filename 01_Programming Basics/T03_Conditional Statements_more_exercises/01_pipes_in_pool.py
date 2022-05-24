v = int(input())
deb_1 = int(input())
deb_2 = int(input())
h = float(input())

water_in = (deb_2 + deb_1) * h
deb = deb_1 + deb_2
deb_1_perc = (deb_1 / deb * 100)
deb_2_perc = (deb_2 / deb * 100)

not_enough = (water_in / v) * 100
diff = abs(v - water_in)

if v >= water_in:
    print(f"The pool is {not_enough:.2f}% full. Pipe 1: {deb_1_perc:.2f}%. Pipe 2: {deb_2_perc:.2f}%.")
else:
    print(f"For {h:.2f} hours the pool overflows with {diff:.2f} liters.")
