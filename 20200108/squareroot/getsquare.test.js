/*
n의 제곱근 정수 x를 구하고, 없으면 -1를 반환
있으면 x+1의 제곱을 반환.
*/

const getResult = (n) =>  getSquare(n, 1);

const getSquare = (value, i) =>  i * i === value ? (i+1) * (i+1) : i * i > value ? -1 : getSquare(value, i+1);

test('getResult', () => {
    expect(getResult(121)).toBe(144);
    expect(getResult(3)).toBe(-1);
})

test('getSquare', () => {
    expect(getSquare(121, 1)).toBe(144);
})