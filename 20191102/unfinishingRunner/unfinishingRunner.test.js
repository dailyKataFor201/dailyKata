/*
문제 : 완주하지 못한 선수
1. 이해
    - 주어진것 : 참가자 배열, 미완주자 배열
    - 아는것 : 참가자배열, 미완주자 배열
    - 모르는것 : 어떻게 풀지
2. 계획
    - 1 안 : for을 사용하여 그냥 존재하면 remove 해주는 방법을 사용함.
    - 2 안 : for문을 돌려 participant에 있는 각 요소를 completion에 indexOf로 존재하는지 확인한다.
            만약에 있으면 complete[index] = null 로 만들어 다음 부턴 찾아지지 않도록 한다.
3. 실행
4. 반성
*/

const unfinishingRunner = (participant, completion) => {
    
    participant.sort();
    completion.sort();
    for(let i = 0; i<participant.length; i++){
        if(participant[i] != completion[i]){
            return participant[i];
        }
    }
}

test('unfinishingRunner', () => {
    expect(unfinishingRunner(['leo', 'kiki', 'eden'], ['eden', 'kiki'])).toBe('leo');
    expect(unfinishingRunner(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola'])).toBe('vinko');
});
