
const hidePhoneNumber = (phone_number) => 
            phone_number.split('').map((v, i) =>
                phone_number.length - 4 > i ? "*" : v).join('')




test('hidePhoneNumber', () => {
    expect(hidePhoneNumber("03333")).toBe("*3333");
    expect(hidePhoneNumber("103333")).toBe("**3333");
    expect(hidePhoneNumber("01033334444")).toBe("*******4444");
})