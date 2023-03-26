def count_code(string):
    count = 0
    for i in range(len(string) - 3):
        if string[i:i+2] == 'co' and string[i+3] == 'e':
            count += 1
    return count