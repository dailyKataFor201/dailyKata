
const factorial = (v) =>  (v == 1) ? 1 : v*factorial(v-1)



test('factorial', () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2 * 1);
    expect(factorial(3)).toBe(3 * 2 * 1);
    expect(factorial(4)).toBe(4 * 3 * 2 * 1);
})