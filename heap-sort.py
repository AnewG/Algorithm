def max_heapify(input, i):

    l = 2 * i
    r = 2 * i + 1

    i = i - 1
    l = l - 1
    r = r - 1

    eage = len(input)-1
    max_value = i

    if(l <= eage):
        if(input[l] > input[max_value]):
            max_value = l
    if(r <= eage):
        if(input[r] > input[max_value]):
            max_value = r
    if(max_value != i):
        input[i], input[max_value] = input[max_value], input[i]
        max_heapify(input, max_value + 1)


def build_max_heap(input):
    last_parent = len(input)/2
    for i in xrange(last_parent, 0, -1):
        max_heapify(input, i)


def heap_sort(input):
    output = []
    init = len(input) - 1
    while init:
        build_max_heap(input)
        now_max = input.pop(0)
        output.append(now_max)
        init = len(input) - 1
    output.append(input.pop(0))
    return output

from random import shuffle
import copy
x = [i for i in range(10)]

for z in xrange(1, 10):
    shuffle(x)
    tmp = copy.deepcopy(x)
    result = heap_sort(tmp)
    print result
