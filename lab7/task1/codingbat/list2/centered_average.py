def centered_average(nums):
    # Remove the smallest and largest values from the list
    nums.remove(max(nums))
    nums.remove(min(nums))
    # Calculate the average of the remaining values
    avg = sum(nums) // len(nums)
    return avg