input = [11, 6, 9, 3, 6, 5, 4, 3, 2, 1]


def insert_sort(input):
    j = 1
    for j in xrange(1, len(input)):
        key = input[j]
        i = j - 1
        while i >= 0:
            if input[i] < key:
                break
            input[i+1] = input[i]
            i = i - 1
        input[i+1] = key
    return input

# output = insert_sort(input)
# print output

from random import shuffle
x = [i for i in range(10)]

for z in xrange(1, 10):
    shuffle(x)
    output = insert_sort(x)
    print output
