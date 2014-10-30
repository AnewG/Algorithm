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

# list = [1, 2, 3, 4, 4, 4, 4]
# max_heapify(list, 2)
# print list
