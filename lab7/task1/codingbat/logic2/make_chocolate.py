def make_chocolate(small, big, goal):
  big_needed = goal // 5
  if big_needed <= big:
    small_needed = goal - big_needed * 5
    if small_needed <= small:
      return small_needed
  else:
    small_needed = goal - big * 5
    if small_needed <= small:
      return small_needed
  return -1
