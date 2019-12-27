/*
    - 잃어버리지 않은 친구 수를 구한다.
    - lost있는 친구들과 reserve의 친구들과 비교하여 빌릴 수 있는 친구수를 구한다.
    - 갖고 있는 친구수와 빌릴 수 있는 친구수를 구한다.
    - 여벌의 체육복을 갖고 있더라도, 도난 당했다면 빌려줄 수 없음.
*/
function solution(n, lost, reserve) {
    var answer = 0;
    return getMaxStudents(n,lost,reserve);
}

const getMaxStudents = (n, lost, reserve) => {
    const countOfHavingUniform = n - lost.length;
    let count = 0;
    lost.forEach(v => {
        for (let i = 0; i < reserve.length; i++) {
            if(reserve[i]>=v-1 && reserve[i]<=v+1){
                if(lost.indexOf(reserve[i])){
                reserve.splice(i,1);
                count++;
                return;
                }
            }
        }
    });
    
    return count+countOfHavingUniform;
}
test('getMaxStudents', () => {
    expect(getMaxStudents(5, [2, 4], [1, 3, 5])).toBe(5);
    expect(getMaxStudents(5, [2, 4], [3])).toBe(4);
    expect(getMaxStudents(3, [3], [1])).toBe(2);
})