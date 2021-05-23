from re import findall

def duplicate_encode(word):
    result = ''

    for char in word.lower():
        found = word.lower().count(char)
        result += ')' if found > 1 else '('
        
    return result
