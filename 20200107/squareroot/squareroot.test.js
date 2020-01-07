/*
    - 임의의 정수 n을 입력값으로 받는다.
    - n의 제곱근 x를 구하고, 없으면 -1을 리턴한다.
    - 제곱근 x에 1을 더한 후에 제곱한 값을 리턴한다.
*/

const getSquareRoot = (n) => {
    
    return getSquare(n, 1);
}

const getSquare = (n, i) => {
    if (i * i === n) {
        return (i+1) * (i+1);
    } else if(i * i > n){
        return -1;
    } else {
        return getSquare(n, i+1);
    }
}
test('getSquareRoot', () => {
    expect(getSquareRoot(121)).toBe(144);
    expect(getSquareRoot(3)).toBe(-1);
})