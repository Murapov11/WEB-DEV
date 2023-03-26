n = int(input())
arr = map(int, input().split())
arr = list(arr)
arr.sort()
arr.reverse()
for i in range(1,len(arr)):
    if(arr[i] != arr[i-1]):
        print(arr[i])
        exit()