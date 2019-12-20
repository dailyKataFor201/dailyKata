const fibonacci = (v) => v == 1 || v == 2 ? 1 : fibonacci(v - 1) + fibonacci(v - 2);

test('fibonacci', () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(1+1);
    expect(fibonacci(4)).toBe(1+2);
    expect(fibonacci(5)).toBe(2+3);
    expect(fibonacci(6)).toBe(3+5);
})
