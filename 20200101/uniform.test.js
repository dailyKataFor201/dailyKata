/*
    - 전체 학생 수 - 체육복 없는 학생수 + 체육복을 빌린 학생수
    - 체육복 없는 학생 수 구하기
        - 잃어 버린 사람중에 여유 체육복이 있던 학생을 제외하면 체육복이 없는 학생이다.
    - 체육복을 빌린 학생 수 구하기
        - 체육복이 없는 학생들을 순회하며, reserve에 자신이 빌릴 수 있는 학생을 찾고, 있으면 여유가 있는 학생들중에 빼준다.
*/

const getMaxParticipants = (n, lost, reserve) => {
    const noUniformStudents = getNoUniformStudents(lost, reserve);
    const lenders = getLenders(lost, reserve);
    const borrowers = getBorrower(noUniformStudents, lenders);
    
    return n - noUniformStudents.length+ borrowers.length;
}

const getNoUniformStudents = (lost, reserve) => {
    // 이곳에서 array의 특정 값이 존재하는지 찾을 수 있는 메소드로 
    // - find
    // return lost.filter(v => reserve.find(element => v == element) === undefined)
    // - indexOf
    return lost.filter(v => reserve.indexOf(v)===-1)
    // - findIndex
    // return lost.filter(v => reserve.findIndex(element => v == element) === -1)
    // - includes
    // return lost.filter(v => reserve.includes(v) === false)
}

const getLenders = (lost, reserve) => {
    return reserve.filter(v => lost.indexOf(v) === -1)
}

const getBorrower = (losts, borrowers) => {

    const lentStudent = [];
    const sibal = [];
    for (let i = 0; i < losts.length; i++) {
        for (let j = 0; j < borrowers.length; j++) {
            if (losts[i] <= borrowers[j] + 1 && losts[i] >= borrowers[j] - 1 && lentStudent.includes(borrowers[j]) == false) {
                sibal.push(losts[i]);
                lentStudent.push(borrowers[i]);
                break;
            }
        }
    }

    return sibal;
    // return losts.filter(lost => {
    //     for(let i = 0; i < borrowers.length; i ++) {
    //         if(borrowers[i]-1 <= lost && borrowers[i] + 1 >= lost) {
    //             borrowers.splice(i, 1);
    //             return true;
    //         }
    //     }
    //     return false;
    // })

    // return losts.filter(lost => {
    //     for (let i = 0; i < borrowers.length; i++) {
    //         if (borrowers[i] - 1 <= lost && borrowers[i] + 1 >= lost) {
    //             borrowers.splice(i,1);
    //             return true
    //         }
    //     }
    //     return false;
    // });
}



test('getMaxParticipants', () => {
    expect(getMaxParticipants(5, [2, 4], [1, 3, 5])).toBe(5);
    expect(getMaxParticipants(5, [2, 4], [3])).toBe(4);
    expect(getMaxParticipants(5, [2, 4], [2,3])).toBe(5);
    expect(getMaxParticipants(5, [1, 4], [1,4])).toBe(5);
    expect(getMaxParticipants(3, [3], [1])).toBe(2);
})

test('getNoUniformStudents', () => {
    expect(getNoUniformStudents([], [])).toEqual([]);
    expect(getNoUniformStudents([1], [])).toEqual([1]);
    expect(getNoUniformStudents([1, 2], [])).toEqual([1, 2]);
    expect(getNoUniformStudents([1, 2], [1])).toEqual([2]);
    expect(getNoUniformStudents([1, 2, 3], [1])).toEqual([2, 3]);
    expect(getNoUniformStudents([1, 2, 3], [1, 3])).toEqual([2]);
    expect(getNoUniformStudents([2, 4], [2, 3])).toEqual([4]);
})

test('getLenders', () => {
    expect(getLenders([2, 4], [2,3])).toEqual([3])
    expect(getLenders([1,2,3], [1,2,3])).toEqual([])
})

test('getBorrower', () => {

    expect(getBorrower([], [])).toEqual([]);
    expect(getBorrower([1], [])).toEqual([]);
    expect(getBorrower([1], [2])).toEqual([1]);
    expect(getBorrower([1, 2], [3, 4])).toEqual([2]);
    expect(getBorrower([2], [3, 4, 1])).toEqual([2]);
    expect(getBorrower([2, 4], [1, 3, 5])).toEqual([2, 4]);
    expect(getBorrower([2, 4], [3])).toEqual([2]);
    expect(getBorrower([2, 4], [3])).toEqual([2]);

})