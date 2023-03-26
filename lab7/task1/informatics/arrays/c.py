a = int(input())
arr = list(map(int, input().split()))
counter = 0
# print even-indexed elements of the array
for i in range(len(arr)):
    if(arr[i] > 0):
        counter += 1
print(counter)