def quick_sort(list, s, l):
    key = list[s]
    i = s
    j = l
    while i != j:
        while j >= s and i != j:
            if(list[j] < key):
                list[i] = list[j]
                break
            j = j - 1
        while i <= l and i != j:
            if(list[i] > key):
                list[j] = list[i]
                break
            i = i + 1
    list[i] = key
    if(i > s):
        quick_sort(list, s, i)
    if(l > i):
        quick_sort(list, i+1, l)


from random import shuffle
x = [i for i in range(10)]

for z in xrange(1, 10):
    shuffle(x)
    quick_sort(x, 0, len(x)-1)
    print x
