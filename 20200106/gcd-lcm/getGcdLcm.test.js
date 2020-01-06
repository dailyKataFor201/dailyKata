const getGcdLcm = (m, n) => [getGcd(greater(m, n),less(m, n)), getLcm(greater(m, n),less(m, n))];
const greater = (m, n) => m - n > 0 ? m : n;
const less = (m, n) => m - n < 0 ? m : n; 
const getGcd = (greater, less) =>  greater % less == 0 ? less : getGcd(less, greater % less)
const getLcm = (greater, less) =>  greater / getGcd(greater, less) * less / getGcd(greater, less) * getGcd(greater, less);

test('getGcdLcm', () => {
    expect(getGcdLcm(3, 12)).toEqual([3, 12]);
})

test('getGcd', () => {
    expect(getGcd(12, 3)).toBe(3);
    expect(getGcd(5, 2)).toBe(1);
})

test('getLcm', () => {
    expect(getLcm(12,3)).toBe(12);
    expect(getLcm(5, 2)).toBe(10);
})