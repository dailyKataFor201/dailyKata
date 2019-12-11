// x부터 x만큼 n번 더하면서 나온 각 값을 배열에 담은것.
const getIncrementNumbers = (x, n) => {
    console.log([...Array(n)]);
    return [...Array(n)].map((_, i) => i+1).map(v => x*v);

}

test('getIncrementNumbers', () => {
    expect(getIncrementNumbers(2, 5)).toEqual([2, 4, 6, 8, 10]);
    expect(getIncrementNumbers(4, 3)).toEqual([4,8,12]);
    expect(getIncrementNumbers(-4, 2)).toEqual([-4, -8]);
})