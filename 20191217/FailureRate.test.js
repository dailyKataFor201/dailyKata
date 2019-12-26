/*
    - 각 스테이지 마다 실패율을 구한다.
        - 해당 스테이지에 머무르는 사람의 수 / 해당 스테이지를 통과하거나 머무르고 있는 사람의 수
    - 내림차순으로 정렬하고, 실패율이 동일한 스테이지가 존재한다면 오름차순으로 정렬한다.
*/

const getDifficultStages = (n, stages) => getFailureRates(stages, n).sort(sortPolicy).map(v => v[0]);


const getFailureRates = (stages, n) => {
    return [...Array(n)].map((_, i) => i + 1).map(stage => {
        const under = stages.filter(v => stage <= v).length;
        const over = stages.filter(v => stage === v).length;
        return [stage, under == 0 ? 0 : over / under];
    })
}

const sortPolicy = (a, b) => {
    return a[1] === b[1] ? a[1] - b[1] : b[1] - a[1];
}


test('getDifficultStages', () => {
    expect(getDifficultStages(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3, 4, 2, 1, 5]);
    expect(getDifficultStages(4, [4,4,4,4,4])).toEqual([4,1,2,3]);
})


test('getFailureRates', () => {
    let stages = [3, 4, 3];
    let n = 4;
    expect(getFailureRates(stages, n)).toEqual([[1, 0], [2, 0], [3, 0.6666666666666666], [4, 1]]);
})