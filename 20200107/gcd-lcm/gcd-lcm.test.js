/*
- 큰값 작은값을 구함
    - 최대 공약수를 유클리드 호제법을 이용하여 구한다.
        - 작은수를 큰 수로 나눠서 나머지가 0인지 확인한다.
            - 0이라면 작은수가 최대공약수
            - 아니라면, 작은수를 나머지로 다시 나눠서 위와동일하게 진행하고, 나머지가 0이면 작은 수가 최대 공약수.
*/

const getGcdLcm = (m,n) => [getGcd(greater(m, n),less(m, n)), getLcm(greater(m, n),less(m, n))];

const greater = (m, n) => m - n > 0 ? m : n;
const less = (m, n) => m - n < 0 ? m : n;

const getGcd = (max, less) => max % less === 0 ? less : getGcd(less, max % less);

const getLcm = (max, less) => max / getGcd(max, less) * less / getGcd(max, less) * getGcd(max, less)

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
})