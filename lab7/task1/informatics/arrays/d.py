a = int(input())
arr = list(map(int, input().split()))
counter = 0
# print even-indexed elements of the array
for i in range(1, len(arr)):
    if arr[i] > arr[i-1]:
        counter += 1
print(counter)