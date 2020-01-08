const getGcdLcm = (m, n) => [getGcd(greater(m,n), less(m,n)), getLcm(greater(m,n), less(m,n))];

const greater = (m, n) => m - n > 0 ? m : n;
const less = (m, n) => m - n < 0 ? m : n;

const getGcd = (max, less) =>  max % less === 0 ? less : getGcd(less % max % less);
const getLcm = (max, less) =>  max / getGcd(max, less) * less / getGcd(max, less) * getGcd(max, less);




test('getGcdLcm', () => {
    expect(getGcdLcm(3, 12)).toEqual([3, 12]);
    // expect(getGcdLcm(2, 5)).toEqual([1, 10]);
});

test('getGcd', () => {
    expect(getGcd(12, 3)).toBe(3);
})

test('getLcm', () => {
    expect(getLcm(12, 3)).toBe(12);
})