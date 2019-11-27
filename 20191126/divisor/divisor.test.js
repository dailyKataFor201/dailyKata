/*
1. divisor로 나누어 떨어지는 배열을 찾음.
2. 정렬함.
3. element 없으면 -1 리턴.
*/

const getDivisor = (arr, divisor) => {
    // const result = [];
    // for(let i = 0; i < 4; i++){
    //     if(arr[i] % divisor === 0) result.push(arr[i]);
    // }

    const resultArray = arr.filter((v) =>  v % divisor === 0)
                                .sort((a, b) => a-b);
    return resultArray.length === 0 ? [-1] : resultArray;
}
test('getDivisor', () => {
    expect(getDivisor([5, 9, 7, 10], 5)).toEqual([5, 10]);
    expect(getDivisor([2, 36, 1, 3], 1)).toEqual([1, 2, 3, 36]);
    expect(getDivisor([3,2,6], 10)).toEqual([-1]);
});