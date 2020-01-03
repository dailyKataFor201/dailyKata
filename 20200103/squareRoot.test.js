/*
    - 1부터 n 까지 제곱하여, 144가 나오는 값을 구한다.
    - 위의 값이 존재하지 않는다면 -1을 리턴한다.
    - 없다면 +1을 한 후에 제곱해준 값을 리턴한다.
*/
const getResult = (n) => {
    return getSquareRoot(n,1) == -1 ? -1 : (getSquareRoot(n,1)+1) * (getSquareRoot(n,1)+1);
}

const getSquareRoot = (target, n) => {
    if(target == n * n ) return n;
    if(n * n > target) return -1;
    return getSquareRoot(target, n+1);
}
test('getResult', () => {
    expect(getResult(121)).toBe(144);
    expect(getResult(3)).toBe(-1);
})