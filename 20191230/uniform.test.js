/*
     - lost와 reserve로 부터 체육복이 없는 학생 배열을 구한다.
     - 현재 체육복이 있는 학생 수를 구한다.
     - 첫번째에서 구한 체육복이 없는 학생들은 빌려줄 수 있는 학생들중 조건에 맞는 친구가 있는지 확인하고, 있으면 빌리고 그 학생은 빌려줄 수 있는 학생 배열에서 제거한다.
*/
const getMaxParticipants = (n, lost, reserve) => {
    const noUniformStudent = getNoUniformStudents(lost,reserve);
    const borrowers = getBorrowers(lost,reserve);


    return n - noUniformStudent.length + borrowers.length;
}

const getNoUniformStudents = (lost, reserve) =>
    lost.filter(v => reserve.indexOf(v) == -1)

const getBorrowers = (losts, borrowers) => {
    return losts.filter(lost => {
        for (let i = 0; i < borrowers.length; i++) {
            if (borrowers[i] - 1 <= lost && borrowers[i] + 1 >= lost) {
                borrowers.splice(i,1);
                return true
            }
        }
        return false;
    });
}
test('getMaxParticipants', () => {
    expect(getMaxParticipants(5, [2, 4], [1, 3, 5])).toBe(5)
    expect(getMaxParticipants(5, [2, 4], [3])).toBe(4)
    expect(getMaxParticipants(3, [3], [1])).toBe(2)

})
test('getNoUniformStudents', () => {
    expect(getNoUniformStudents([1], [])).toEqual([1]);
    expect(getNoUniformStudents([1, 2], [])).toEqual([1, 2]);
    expect(getNoUniformStudents([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(getNoUniformStudents([1, 2, 3], [1])).toEqual([2, 3]);
    expect(getNoUniformStudents([1, 2, 3], [1, 2])).toEqual([3]);
    // expect(getNoUniformStudents([2, 4], [1, 3, 5])).toEqual([2, 4]);
})

test('getBorrowers', () => {
    expect(getBorrowers([1], [])).toEqual([]);
    expect(getBorrowers([1, 2], [1])).toEqual([1]);
    expect(getBorrowers([1, 2], [1, 2])).toEqual([1, 2]);
    expect(getBorrowers([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(getBorrowers([1], [4])).toEqual([]);
    expect(getBorrowers([1, 2], [3])).toEqual([2]);
})