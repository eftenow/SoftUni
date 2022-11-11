def numbers_searching(*args):
    nums = set(i for i in range(min(args), max(args) + 1))
    missing_numbers = list(nums.difference(args))
    duplicates = set(x for x in sorted(args) if args.count(x) != 1 and x)
    return [missing_numbers[0], sorted(list(duplicates))]
