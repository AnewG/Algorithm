def merge_sort_sub(list, s, m, l):
    infinite = float("inf")
    inputl = list[s:m]
    inputr = list[m:l]
    inputl.append(infinite)
    inputr.append(infinite)
    i = j = 0
    for k in xrange(s, l):
        if inputl[i] < inputr[j]:
            list[k] = inputl[i]
            i = i + 1
        else:
            list[k] = inputr[j]
            j = j + 1


def merge_sort(list, s, l):
    if l > s:
        m = (s+l)/2
        if l - s > 2:
            merge_sort(list, s, m)
            merge_sort(list, m, l)
        merge_sort_sub(list, s, m, l)

from random import shuffle
x = [i for i in range(10)]

for z in xrange(1, 10):
    shuffle(x)
    merge_sort(x, 0, len(x))
    print x

