
def solution(arr, commands) :
    result = []
    for command in commands :
        result.append(sorted(arr[command[0]-1:command[1]])[command[2]-1])
    return result

def test_solution() :
    assert solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]) == [5, 6, 3]