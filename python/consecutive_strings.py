def longest_consec(strarr, k):
    found = ''

    for i in range(len(strarr) - (k - 1)):
        string = ''
        
        for j in range(k):
            string += strarr[i + j]
        
        if len(string) > len(found):
            found = string
            
    return found
