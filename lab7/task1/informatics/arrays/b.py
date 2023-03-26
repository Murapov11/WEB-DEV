a = int(input())
arr = list(map(int, input().split()))
# print even-indexed elements of the array
for i in range(len(arr)):
    if(arr[i] % 2 == 0):
        print(arr[i], end=" ")