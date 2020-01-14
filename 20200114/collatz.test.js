/*
    - 입력된 수가 짝수라면 2로 나눈다.
    - 입력된 수가 홀수라면 3을 곱하고 1을 더한다
    - 1이 나올때 까지 위의 작업을 계속한다.
    - 위의 작업을 센다.
*/

const solution = (n) => {
    const result = getCount(n,0);
    return result > 500 ? -1 : result;
}

const getCount = (n, count) => 
     n === 1 ? count : n % 2 === 0 
             ? getCount(parseInt(n / 2), count + 1) 
             : getCount((n * 3) + 1, count + 1);

test("solution", () => {
    expect(solution(6)).toBe(8);
    expect(solution(16)).toBe(4);
    expect(solution(626331)).toBe(-1);
});

test('getCount', () => {
    expect(getCount(16, 0)).toBe(4);
})