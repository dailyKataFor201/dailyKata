/*
    - 1부터 n까지 배열 만듬. A일 때와 B일 때 뺴곤 다 0을 넣어줌.
    - 홀수를 탐색하면서 자신과 다음 수가 A B인 경우를 찾음.
    - 위에서 모두 찾았는데 없다면 round를 +1로 하고
    - 다음 라운드를 대진표를 다시 짠다.
        - 둘다 0이라면 그냥 0을 둘중 하나가 A 또는 B라면 그 둘을 만들어 준다.


        1 2 3 4 
*/
const solution = (n, a, b) => {
    let round = 1;
    let draw = [...Array(n)].map((_, i) => i + 1 == a ? a : i + 1 == b ? b : 0);
    
    while(true){
        if (findPair(draw,a,b)){
            break;
        } else {
            draw = nextRound(draw, a, b)
            round ++;
        }
    }
    return round;
}

const findPair = (arr, a, b) => {
    for(let i = 0 ; i < arr.length; i+=2){
            if ((arr[i] == a && arr[i+1] == b) || (arr[i] == b && arr[i+1] == a)) {
                return true;
            }
    }
    return false;
}

const nextRound = (arr, a, b) => {
    const draw = [];
    for(let i = 0 ; i < arr.length; i+=2){
        draw.push(getWinnger(a,b,[arr[i],arr[i + 1]]))
    }
    return draw
}

const getWinnger = (a, b, arr) => {
    if(arr.indexOf(a) != -1) {
        return a
    }
    if(arr.indexOf(b) != -1) {
        return b
    }
    return 0
}
test('solution', () => {
    expect(solution(2, 1, 2)).toBe(1);
    expect(solution(4, 2, 4)).toBe(2);
    expect(solution(8, 4, 7)).toBe(3);
})

test('findPair', () => {
    expect(findPair([1, 2], 1, 2)).toBe(true);
    expect(findPair([1, 2, 3, 4], 4, 3)).toBe(true);
    expect(findPair([1, 2, 3, 4, 5, 6], 5, 6)).toBe(true);
})

test('nextRound', () => {
    expect(nextRound([1, 2, 3, 4], 2, 4)).toEqual([2, 4]);
    expect(nextRound([1, 2, 3, 4, 5, 6, 7 ,8], 4, 7)).toEqual([0, 4, 0, 7 ]);
})

test('getWinnger', () => {
    expect(getWinnger(1,2,[1,3])).toBe(1)
})