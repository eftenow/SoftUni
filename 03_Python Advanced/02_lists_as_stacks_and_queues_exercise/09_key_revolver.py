from collections import deque
bullet_price = int(input())
gun_barrel = int(input())
bullets = [int(x) for x in input().split()]  # last
locks = deque(int(x) for x in input().split())  # first
intelligence = int(input())

bullets_shot = 0

while bullets and locks:
    bul = bullets.pop()
    lock = locks.popleft()
    bullets_shot += 1

    if bul <= lock:
        print("Bang!")
    else:
        print("Ping!")
        locks.appendleft(lock)
    if bullets_shot % gun_barrel == 0 and bullets:
        print('Reloading!')


if not locks:
    money_earned = intelligence - (bullets_shot * bullet_price)
    print(f'{len(bullets)} bullets left. Earned ${money_earned}')
else:
    print(f"Couldn't get through. Locks left: {len(locks)}")
