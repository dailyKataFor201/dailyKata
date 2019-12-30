/*
    - 현재 체육복을 갖고 있는 학생의 수를 구한다.
    - 체육복을 도난당하지 않아 빌려줄 수 있는 학생배열을 구한다.
        - 만약 여분을 가져왔는데 도난을 당했다면, lost에서는 빼줘야한다. 이 학생은 이미 체육복을 갖고 있기 때문이다.
    - lost를 순회하면서 체육복을 빌려줄 수 있는 친구들에게 빌린다.
        - 잃어버린애는 reserve에서 자신이 빌릴 수 있는애를 찾는다.
        - 찾는다면 빌리고, 빌려줄 수 있는 학생의 배열에서 없애버린다.
    - 체육복을 빌려준 친구는 빌려줄 수 있는 친구 배열에서 제외한다.

    - 체육복이 없는 학생의 배열을 구한다.
    - 빌려줄 수 있는 여분의 체육복을 갖고 있는 학생의 배열을 구한다.
    - 체육복이 없는 학생들을 순회하면서 빌려줄 수 있는 학생들에게 빌린다.
    - 빌린다면, 빌려줄 수 있는 학생 배열에서 빌려준 학생을 제거한다.
*/

const getMaxParticipants = (n, lost, reserve) => {
    const participantNum = n - lost.length;
    const lastStudents = getLostStudents(lost, reserve);
    const lenders = getLenders(lost, reserve);


    const borrowersNum = lastStudents.filter(v => {
        for(let i = 0; i < lenders.length; i++) {
            if(lenders[i]+1 == v || lenders[i]-1 == v){
               lenders.splice(i,1);
               return true; 
            }
        }
        return false;
    })

    return n - lastStudents.length + borrowersNum.length;
}
const getLostStudents = (lost, reserve) => {
    
    return lost.filter(v1 =>  reserve.filter(v2 => v1 == v2).length == 0)
}
const getLenders = (lost, reserve) => {
    return reserve.filter(v => lost.indexOf(v) === -1);
}

test('getMaxParticipants', () => {
    expect(getMaxParticipants(5, [2, 4], [1, 3, 5])).toBe(5);
    expect(getMaxParticipants(5, [2, 4], [3])).toEqual(4);
    expect(getMaxParticipants(3, [3], [1])).toEqual(2);
    expect(getMaxParticipants(5, [1, 4], [1, 3, 5])).toBe(5);
})

test('getlender', () => {
    expect(getLenders([1], [1])).toEqual([]);
    expect(getLenders([1], [1, 2])).toEqual([2]);
    expect(getLenders([2, 4], [1, 3, 5])).toEqual([1, 3, 5]);

})

test('getLostStudents', () => {
    expect(getLostStudents([1, 4], [1, 3, 5])).toEqual([4]);
    expect(getLostStudents([1, 4], [1, 4, 5])).toEqual([]);
    expect(getLostStudents([1, 4, 5], [1, 4])).toEqual([5]);
})