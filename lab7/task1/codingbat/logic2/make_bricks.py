def make_bricks(small, big, goal):
    # Calculate the maximum number of inches that can be obtained with big bricks
    max_big_inches = big * 5
    
    # Calculate the remaining goal length if we use all the big bricks
    remaining_goal = goal - max_big_inches
    
    # Check if we have enough small bricks to cover the remaining goal length
    if remaining_goal <= small and remaining_goal >= 0:
        return True
    
    # Check if we can reach the goal length with just the big bricks
    if max_big_inches >= goal and goal % 5 <= small:
        return True
    
    # If neither condition is satisfied, it is impossible to make the goal
    return False