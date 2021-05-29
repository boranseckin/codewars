def break_camelcase(string):
    result = ''
    last = 0

    for i in range(len(string)):
        if string[i].isupper():
            result += f'{string[last:i]} '
            last = i
    
    result += string[last:]

    return result
