const getGcdLcm = (m, n) => [getGcd(greater(m, n), less(m, n)), getLcm(greater(m, n), less(m, n))];

const greater = (m, n) => m - n > 0 ? m : n;

const less = (m, n) => m - n < 0 ? m : n;

const getGcd = (greater, less) => {
    const extra = greater % less
    return extra == 0 ? less : getGcd(less, extra);
}

const getLcm = (greater, less) => {
    const gcd = getGcd(greater, less);
    return greater/getGcd(greater, less) * less/gcd * gcd;
}

test('getGcdLcm', () => {
   expect(getGcdLcm(3, 12)).toEqual([3, 12]);
   expect(getGcdLcm(2, 5)).toEqual([1, 10]);
})

test('getGcd', () => {
    expect(getGcd(3, 12)).toBe(3);
    expect(getGcd(2, 5)).toBe(1);
})

test('getLcm', () => {
    expect(getLcm(3, 12)).toBe(12);
    expect(getLcm(2, 5)).toBe(10);
})