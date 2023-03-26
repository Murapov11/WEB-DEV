students = []
for _ in range(int(input())):
    name = input()
    score = float(input())
    students.append([name,score])
    # Find the second lowest grade
grades = set([student[1] for student in students])
second_lowest_grade = sorted(grades)[1]

# Create a list of names with the second lowest grade
names = [student[0] for student in students if student[1] ==             second_lowest_grade]

# Sort the list of names alphabetically
names.sort()

# Print each name on a new line
for name in names:
    print(name)