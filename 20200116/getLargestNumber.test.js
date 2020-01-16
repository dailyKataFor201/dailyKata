
const getLargestNumber = (arr) => checkZero(arr.map(v => v+"").sort(compare).join(''));

const compare = (a, b) =>  (a+''+b) - (b+''+a) < 0 ? 1 : -1;

const checkZero = (value) => +value === 0 ? "0" : value


test('getLargestNumber', () => {
    expect(getLargestNumber([6, 10, 2])).toBe("6210");
    expect(getLargestNumber([3, 30, 34, 5, 9])).toBe("9534330");
    expect(getLargestNumber([0, 0, 34, 5, 9])).toBe("953400");
    expect(getLargestNumber([0, 9])).toBe("90");
    expect(getLargestNumber([0, 0, 0, 0, 0])).toBe("0");
});

test('compare', () => {
    expect(compare(3, 10)).toBe(-1);
    expect(compare(400, 9)).toBe(1);
    expect(compare(124091283, 9)).toBe(1);
    expect(compare(124091283, 9123981238)).toBe(1);
    expect(compare(124091283, 123981238)).toBe(-1);
});