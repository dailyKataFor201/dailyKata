/*
    - n : 임의의 양의 정수
    - n의 제곱근 x를 구한다.
    - x가 있다면, x+1을 제곱한 값을 리턴
    - 없으면 -1을 리턴.
*/
const checkSquareRoot = (num) => {
    const squareRoot = getSquareRoot(num, 0);
    return squareRoot == -1 ? -1 : (squareRoot + 1) * (squareRoot + 1)
}

const getSquareRoot = (num, count) => {
    if (num === 1) return 1;
    if (num % count == 0 && count * count == num) return count;
    if (count === num - 1) return -1;
    return getSquareRoot(num, count + 1);
}

test('checkSquareRoot', () => {
    expect(checkSquareRoot(121)).toBe(144);
    expect(checkSquareRoot(3)).toBe(-1);
    expect(checkSquareRoot(1)).toBe(4);
    expect(checkSquareRoot(13)).toBe(-1);
    expect(checkSquareRoot(144)).toBe(169);
});

test('getSquareRoot', () => {
    expect(getSquareRoot(1)).toBe(1);
    expect(getSquareRoot(2)).toBe(-1);
    expect(getSquareRoot(3)).toBe(-1);
    expect(getSquareRoot(4)).toBe(2);
})