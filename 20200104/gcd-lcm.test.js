const getGcdLcm = (m, n) => {
    return [getGcd(greater(m, n), less(m, n)), getLcm(greater(m, n), less(m, n))];
}

const getGcd = (greater, less) => {
    const extra = greater % less;
    if(extra == 0 ) {
        return less;
    }
    return getGcd(less, extra);
}

const getLcm = (greater, less) => {
    const gcd = getGcd(greater, less);
    
    return greater / gcd * less / gcd * gcd;
}
const greater = (m, n) => m - n > 0 ? m : n;
const less = (m, n) => m - n < 0 ? m : n;
test('getGcdLcm', () => {
    expect(getGcdLcm(3, 12)).toEqual([3, 12]);
    // expect(getGcdLcm(2, 5)).toEqual([1, 10])
})

test('getGcd', () => {
    expect(getGcd(3, 12)).toBe(3);
    expect(getGcd(2, 5)).toBe(1);
})

test('getLcm', () => {
    expect(getLcm(3, 12)).toBe(12);
})