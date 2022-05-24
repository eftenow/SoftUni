budget = float(input())
amount_video_card = int(input())
amount_processor = int(input())
amount_ram = int(input())

price_video_card = 250 * amount_video_card
processor_price = (0.35 * price_video_card) * amount_processor
ram_price = (0.10 * price_video_card) * amount_ram
end_price = price_video_card+processor_price+ram_price

if amount_video_card > amount_processor:
    end_price -= 0.15 * end_price

diff = abs(budget - end_price)
if budget >= end_price:
    print(f"You have {diff:.2f} leva left!")

else:
    print(f"Not enough money! You need {diff:.2f} leva more!")
