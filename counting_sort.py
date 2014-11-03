def counting_sort(list, max):
    count_list = [0] * (max+1)
    length = len(list)
    for i in xrange(0, length):
        count_list[list[i]] += 1
    for i in xrange(1, max+1):
        count_list[i] = count_list[i-1] + count_list[i]
    result = [0] * length
    for i in xrange(length-1, -1, -1):
        temp = list[i]
        result[count_list[temp]-1] = temp
        count_list[temp] -= 1
    return result

from random import shuffle
x = [i for i in range(9)]

for z in xrange(1, 10):
    shuffle(x)
    print counting_sort(x, 9)
