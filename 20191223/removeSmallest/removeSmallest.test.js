/*
    - 가장 작은값을 찾는다.
    - 찾은 인덱스를 제거한다.
    - 길이를 확인해서 0이면 -1 리턴
    - 아니면 제거한 값 리턴.
    - 배열에서 어떻게 가운데에 있는것을 삭제 할것인가 ? 
*/

const removeSmallest = (array) => {
    // const result = array.filter((v) => v != Math.min(...array));
    const result = array.splice(array.indexOf(Math.min(...array)),1)
    console.log(result)
    return result.length == 0 ? [-1] : result;
}
test('removeSmallest', () => {
    expect(removeSmallest([4, 3, 2, 1])).toEqual([4, 3, 2]);
    expect(removeSmallest([10])).toEqual([-1]);
})