/*
    - 정수를 각 자릿값으로 나눈다.
    - 모두 더한다
    - 해당 값을 주어진 정수로 % 연산자를 사용했을경우 0이 나오면 true
*/

const isHashad = (v) =>
    v % (v + "").split('').reduce((acc, cur) => (+acc) + (+cur)) === 0;

test('isHashad', () => {
    expect(isHashad(10)).toBe(true);
    expect(isHashad(11)).toBe(false);
    expect(isHashad(12)).toBe(true);
    expect(isHashad(13)).toBe(false);
})