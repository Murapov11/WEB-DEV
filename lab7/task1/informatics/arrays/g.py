a = int(input())
array = list(map(int, input().split()))

array.reverse()
for i in range(len(array)):
    print(array[i],end = " ")