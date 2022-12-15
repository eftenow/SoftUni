def cache(func):
    log = {}

    def wrapper(num):
        if num in log:
            return log[num]

        res = func(num)
        log[num] = res
        return res

    wrapper.log = log
    return wrapper
