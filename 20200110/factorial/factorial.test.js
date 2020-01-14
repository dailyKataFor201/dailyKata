const factorial = (value) => value == 1 ? 1 : factorial(value-1) * value;


test('factorial', () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
});