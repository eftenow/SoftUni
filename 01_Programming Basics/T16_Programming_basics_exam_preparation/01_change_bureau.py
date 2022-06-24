btc_amount = int(input())
yuan_amount = float(input())
commission = float(input())

btc_price = 1168
dollar_to_lv = 1.76
euro_to_lv = 1.95

yuan_price_in_usd = 0.15 * yuan_amount
yuan_price_in_lv = yuan_price_in_usd * dollar_to_lv
btc_money_in_lv = btc_amount * btc_price

total_money_in_eur = (btc_money_in_lv + yuan_price_in_lv) / euro_to_lv
commission_fee = total_money_in_eur * commission / 100
total_money_after_fee = total_money_in_eur - commission_fee

print(f"{total_money_after_fee:.2f}")
