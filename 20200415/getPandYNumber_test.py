def solution(str) :
    value = str.upper()
    return value.count("P") == value.count("Y")
def test_solution() :
    assert solution("pPoooyY") == True