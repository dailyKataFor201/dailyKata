/*
    - 스테이지에 도달한 플레이어 수 : 현재 스테이지와 같거나 큰 애들
    - 클리어하지 못한 플레이어 수 : 현재 스테이지에 머물러 있는 애들
    - n번의 순회를 거쳐 스테이지에 도달한 수를 구함.
    - n번의 순회를 거쳐 해당 스테이지에 머물러 있는 수를 구함.
    - 위의 두가지를 사용하여 실패율을 구함.
    - 내림차순으로 정렬
*/

const solution = (N, stages) =>  getFailure(N, stages).sort((a,b) =>  b[1] - a[1]).map(v => v[0]);


const getFailure = (n, stages) => {
    const under = [...Array(n)].map((v,i) => i+1 ).map(stage =>  stages.filter(v => stage <= v).length)
    const over = [...Array(n)].map((v,i) => i+1 ).map(stage => stages.filter(v => stage == v).length)
    // console.log([...Array(n)].map((v,i) => i+1 ).map(stage =>  stages.filter(v => stage <= v).length))
    // console.log([...Array(n)].map((v,i) => i+1 ).map(stage => stages.filter(v => stage == v).length))
    // console.log([...Array(n)].map((v, i) => {
    //     // console.log(over[i]/under[i])
    //     // console.log(1/8)
    //     const result = over[i] == 0 ? 0 : over[i]/under[i]
    //     return [i+1,result]
    // }))
    return [...Array(n)].map((v, i) => {
        const result = over[i] == 0 ? 0 : over[i]/under[i]
        return [i+1,result]
    })
}

test('solution', () => {
    expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3,4,2,1,5])
    expect(solution(4, [4,4,4,4,4])).toEqual([4,1,2,3])
})

// test('getFailure', () => {
//     expect(getFailure(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([1/8,3/7,2/4,1/2,0])
// })