def merge(list):
    new_list = []
    for sublist in list:
        new_list.extend(sublist)
    return new_list


def split(list, base, digit_num):
    buckets = [[] for _ in xrange(base)]
    for num in list:
        buckets[(num // (base ** digit_num)) % base].append(num)
    return buckets


def radixSort(list, base):
    padding = int(round(log(max(abs(num) for num in list), base)) + 1)
    for digit_num in range(padding):
        list = merge(split(list, base, digit_num))
    return list


from random import shuffle
from math import log
import copy
x = [i for i in range(10)]

for z in xrange(1, 10):
    shuffle(x)
    print radixSort(x, 10)
