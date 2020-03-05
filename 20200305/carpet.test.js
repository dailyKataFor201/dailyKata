/*
1. brown + red = 넓이
2. 위의 넓이가 될 수 있는 인수의 쌍을 구한다.
3. 각 인수에 2를 곱하고 4를 빼준다.
4. 위의 값이 brown과 같은지 확인하는 값을 리턴한다.
5. 리턴하기 전에 첫번째 수가 더 크게 만들어준다.
*/

const solution = (brown, red) => {
    const area = brown + red;
    const measures = getMeasure(area);
    
    for(let i = 0; i < measures.length; i++){
        const comparing = measures[i];
        const borderCounts = getBrownCounts(comparing);
        if(borderCounts === brown){
            return comparing.sort((a,b) => b - a);
        }
    }
}

const getMeasure = (val) => {
    const measures = [];

    for (let i = 1; i <= val; i++){
        if(val % i == 0){
            measures.push([i, val/i]);
        }
    }
    return measures;
}

const getBrownCounts = ([a, b]) => {
    return (a * 2) + (b * 2) - 4 ;
}



test("solution", () => {
    expect(solution(10, 2)).toEqual([4, 3]);
    expect(solution(8, 1)).toEqual([3, 3]);
    expect(solution(24, 24)).toEqual([8, 6]);

});

test("getMeasure", () => {
    expect(getMeasure(1)).toEqual([[1,1]]);
    expect(getMeasure(2)).toEqual([[1,2],[2,1]]);
    expect(getMeasure(3)).toEqual([[1,3],[3,1]]);
    expect(getMeasure(4)).toEqual([[1,4],[2,2], [4, 1]]);
    expect(getMeasure(6)).toEqual([[1,6],[2,3], [3,2], [6,1]]);
})

test("getBrownCounts", () => {
    expect(getBrownCounts([3, 4])).toEqual(10);
    expect(getBrownCounts([3, 3])).toEqual(8);
    expect(getBrownCounts([6, 8])).toEqual(24);
})