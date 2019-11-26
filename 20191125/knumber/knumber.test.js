/*
    - commands를 순회하면서, i, j, k 를 가져온다.
    - i부터 j까지 잘라내고, 정렬한다
    - k를 가져온다.
    - 하지만 여기선 배열 안의 모든 element가 숫자로 보여도 sort함수를 사용할 경우엔, utf-8순으로 하기 때문에, 특수 장치를 둬야한다.
    - 가져온 값을 배열에 담는다.
*/
const getKNumber = (array, commands) =>   commands.map(([start, end, k]) => 
                                                 array.slice(start -1, end).sort()[k - 1]);
    


test('getKNumber', () => {
    expect(getKNumber([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])).toEqual([5, 6, 3]);
    expect(getKNumber([1, 5, 2, 6], [[2, 4, 3], [4, 4, 1]])).toEqual([6, 6]);
})