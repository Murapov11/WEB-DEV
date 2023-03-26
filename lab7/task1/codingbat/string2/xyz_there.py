def xyz_there(string):
    if string.startswith('xyz'):
        return True
    for i in range(1, len(string)-2):
        if string[i-1] != '.' and string[i:i+3] == 'xyz':
            return True
    return False