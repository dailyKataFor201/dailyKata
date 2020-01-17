/*
    - sort하여, 두수를 다른 방향으로 이어붙혔을 때, 둘중 큰 값이 나오는 첫번째 값이 앞에 나오도록 한다.
    - 모두 이어 붙혀서 값을 리턴한다.
    - 하지만 값이 00000와 같이 나올 경우 0으로 리턴한다.
*/
const getLargest_number = (arr) =>  arr.sort(compare)[0] === 0 ? 0 : arr.join('');


const compare = (a, b) =>  (a + "" + b + "") - (b + "" + a + "") > 0 ? -1 : 1;

test('getLargest_number', () => {
    expect(getLargest_number([6, 10, 2])).toBe("6210");
    expect(getLargest_number([3, 30, 34, 5, 9])).toBe("9534330");

});

test('compare', () => {
    expect(compare(9, 10)).toBe(-1);
    expect(compare(0, 10)).toBe(1);
    expect(compare(8, 7)).toBe(-1);
})
