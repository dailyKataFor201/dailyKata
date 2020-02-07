/*
    - A와 B를 2로 나눠 반올림 했을때 둘다 1이 나올 때 라운드를 리턴
    - 위의 것을 확인한 후에 라운드에 +1을 해줌.
*/

const solution = (n,a,b) => {
    var round = 1;
    var target_a = next(a);
    var target_b = next(b);

    while(target_a != target_b){
        round++;
        target_a = next(target_a);
        target_b = next(target_b);
    }
    return round;
}

const next = (a) => Math.ceil(a/2);

test('solution', () => {
    expect(solution(2,1,2)).toBe(1);
    expect(solution(2,2,1)).toBe(1);
    expect(solution(4,3,4)).toBe(1);
    expect(solution(4,4,3)).toBe(1);
    expect(solution(4,1,3)).toBe(2);
    expect(solution(4,2,4)).toBe(2);
    expect(solution(4,4,2)).toBe(2);
    expect(solution(8,4,7)).toBe(3);
    expect(solution(8,7,4)).toBe(3);
    expect(solution(8,1,5)).toBe(3);
})
