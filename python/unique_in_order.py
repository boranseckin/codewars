def unique_in_order(iterable):
    arr = []
    if not iterable: return arr
    arr.append(iterable[0])

    for elem in iterable:
        if not elem == arr[len(arr) - 1]: arr.append(elem)
    
    return arr
