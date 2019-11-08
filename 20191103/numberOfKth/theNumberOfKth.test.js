/*
문제 : k번째 수

1. 이해
    - 아는것
        - array : 정렬될 원소들
        - commands : [i,j,k],[i,j,k]
        - i 번쨰부터 j 번째까지 잘라 정렬한 후의 k 번째 입력값
        - commands의 배열원소의 개수만큼 답이 나와야함.
    - 모르는것
        - 어떤 정렬을 사용할지
2. 계획
    - 입력값을 받으면, commands에 입력된 갯수만큼 한번씩 실행
    - 정렬한 후에 그 k번쨰 값을 리턴
    - 리턴값을 배열에 입력.
3. 실행
4. 반성
    - .sort 함수는 아스키코드 기준 정렬이라서 두 자리 숫자와 한 자리 숫자를 정렬할 때 오류가 생깁니다. 따라서 a-b 부분을 추가해서 수정을 했습니다.
    - sort의 동작 방식을 정확하게 이해하지 못하여 테스트가 실패할 경우 어디서 문제가 생겼는지 추측을 할 수 없었음.

*/

const theNumberOfKth = (array, commands) => {
    let result = [];
    commands.forEach((element, i) => {
        result[i] = getNumOfKth(getSortedArray(array,element[0],element[1]),element[2]);
    });
    return result;
}

const getSortedArray = (array, start, end) => {
    return array.slice(start-1,end).sort((a,b) => {
        return a - b;
    });
}

const getNumOfKth = (array, k) => {
    return array[k-1];
}

test('theNumberOfKth', () => {
    expect(theNumberOfKth([1, 5 ,2 ,6 ,3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])).toEqual([5, 6, 3]);
    expect(theNumberOfKth([1, 5 ,2 ,6 ,3, 7, 4], [[2, 5, 3], [4, 4, 1]])).toEqual([5, 6]);
    expect(theNumberOfKth([1, 5 ,2 ,6 ,3, 7, 4], [[4,4,1]])).toEqual[[6]];
});

test('getSortedArray', () => {
    expect(getSortedArray([1, 5 ,2 ,6 ,3, 7, 4], 2, 5)).toEqual([2, 3, 5, 6]);
})

test('getNumOfKth', () => {
    expect(getNumOfKth([2, 3, 5, 6], 3)).toBe(5);
});