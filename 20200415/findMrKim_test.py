def solution(arr) :
    return "김서방은 {}에 있다".format(arr.index("Kim"))

def test_solution() :
    assert solution(['Jane', 'Kim']) == "김서방은 1에 있다"