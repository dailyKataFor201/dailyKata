/*
    - [스테이지, 실패율] 형식으로 배열을 구한다.
    - 정렬한다.
    - 실패율이 같다면 작은 번호의 스테이지가 먼저 오도록 한다.
*/

const solution = (n, arr) => {
    return getFailureRates(n, arr).sort(compare).map(v => v[0])
}

const getFailureRates = (n, arr) => [...Array(n)].map((_, i) => i+1).map(stage => {
        const over = arr.filter(v => v === stage).length;
        const under = arr.filter(v => v >= stage).length;
        const failure = over === 0 ? 0 : over / under
        return [stage, failure]
    });

const compare = (a, b) => a[1]===b[1] ? a[0]-b[0] : b[1]-a[1]

test('solution', () => {
    expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3,4,2,1,5]);
    expect(solution(4, [4,4,4,4,4])).toEqual([4,1,2,3]);
});

test('getFailureRates', ()=> {
    expect(getFailureRates(3, [1, 1, 2, 3])).toEqual([[1,1/2],[2,1/2],[3,1/1]]);
    expect(getFailureRates(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([[1,1/8],[2,3/7],[3, 2/4], [4, 1/2], [5, 0]]);
});

