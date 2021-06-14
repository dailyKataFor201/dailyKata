import itertools
import sys

def sumSeriesNumbers(numbers):
    arr = []
    result = 0;
    for i in numbers:
      result  = result + int(i)
      arr.append(result)
    return sum(arr)

def solution(name):
    arr = name.split('\n')
    n = arr[0]
    numbers = arr[1].split(' ');
    cases = itertools.permutations(numbers, int(n))
    return min(list(map(sumSeriesNumbers, itertools.permutations(numbers, int(n)))))


def test_solution():
    assert solution("""5
3 1 4 3 2""") == 32

def test_sumSeriesNumbers():
    assert sumSeriesNumbers([3]) == 3
    assert sumSeriesNumbers([3, 1]) == 7
    assert sumSeriesNumbers([3, 1, 4]) == 15
    assert sumSeriesNumbers([3, 1, 4, 3]) == 26
    assert sumSeriesNumbers([3, 1, 4, 3, 2]) == 39