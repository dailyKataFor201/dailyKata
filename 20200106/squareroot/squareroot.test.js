/*
    - n의 제곱근 x를 구하고, 없으면 -1을 리턴
    - 있으면 x+1을 제곱한 값을 리턴.
*/
const getSquareRoot = (n) =>  getResult(n,1);


const getResult = (n, i) => 
    i * i == n ? (i+1)*(i+1) : i * i < n ? getResult(n, i+1) : -1;


test('getSquareRoot', () => {
    expect(getSquareRoot(121)).toBe(144);
    expect(getSquareRoot(3)).toBe(-1);
})
