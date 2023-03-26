def caught_speeding(speed, is_birthday):
  if is_birthday:
    if speed <= 60 + 5:
      return 0
    if speed > 60 + 5 and speed <= 80 + 5:
      return 1
    if speed > 80 + 5:
      return 2
  elif speed <= 60:
    return 0
  elif speed >= 61 and speed <= 80:
    return 1
  return 2