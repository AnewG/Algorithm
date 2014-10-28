from random import randint
from random import shuffle


def random_list(input):
    for i in xrange(0, len(input)):
        swap_idx = randint(i, len(input)-1)
        input[swap_idx], input[i] = input[i], input[swap_idx]
    return input

x = [11, 6, 9, 3, 6, 5, 4, 3, 2, 1]

for z in xrange(1, 10):
    output = random_list(x)
    print output
