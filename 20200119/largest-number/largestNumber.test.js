
/*
           - 두수를 입력 받는다.
            - 다른 순서로 이어 붙힌다.
            - 수를 비교한다.
            - 큰 값이 나오는 앞의 값이 앞으도록 1을 리턴
*/

const largestNumber = (array) => array.sort(compare)[0] == 0 ? "0" : array.join("");

const compare = (a, b) => b+""+a+"" > a+""+b+"" ? 1 : -1

test('largestNumber', () => {
    expect(largestNumber([6, 10, 2])).toBe("6210");
    expect(largestNumber([3, 30, 34, 5, 9])).toBe("9534330");
    expect(largestNumber([0, 0, 0, 0])).toBe("0");
})

test('compare', () => {
    expect(compare(5, 9)).toBe(1);
    expect(compare(3, 9)).toBe(1);
    expect(compare(2, 1)).toBe(-1);
    
})