/*
    - 가장 큰 수가 나올 수 있도록 소트
    - 이어 붙힌다.
    - 0이 아니면 값을 리턴한다.
*/

const getLargestNumber = (arr) => arr.sort(compare)[0] === 0 ? 0 : arr.sort(compare).join('');

const compare = (a, b) => a+""+b > b+""+a ? -1 : 1

test('getLargestNumber', () => {
    expect(getLargestNumber([6, 10, 2])).toBe("6210");
    expect(getLargestNumber([3, 30, 34, 5, 9])).toBe("9534330");
})

test('compare', () => {
    expect(compare(9,1)).toBe(-1);
    expect(compare(1,2)).toBe(1);
    expect(compare(3490,980)).toBe(1);
})