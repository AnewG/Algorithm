def merge_sort_sub(list, s, m, l):
    infinite = float("inf")
    inputl = list[s:m]
    inputr = list[m:l]
    inputl.append(infinite)
    inputr.append(infinite)
    i = j = 0
    for k in xrange(len(list)):
        if inputl[i] < inputr[j]:
            list[k] = inputl[i]
            i = i + 1
        else:
            list[k] = inputr[j]
            j = j + 1


x = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 14]
merge_sort_sub(x, 0, len(x)/2, len(x))
print x
