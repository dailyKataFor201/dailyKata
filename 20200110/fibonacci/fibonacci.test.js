const fibonacci = (value) =>  
    value <= 2 ? 1 : fibonacci(value-2) + fibonacci(value-1);


test('fibonacci', () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
})