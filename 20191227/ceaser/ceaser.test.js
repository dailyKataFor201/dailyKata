const CAPITAL = 65;
const SMALL = 97;

const encryptCeaser = (str, n) => str.split('').map(v => 
         v === ' ' ? ' ' : convert(v,n)).join('');

const convert = (char, distance) => 
    isUpperCase(char)
    ?letter(CAPITAL)[index(char,distance,CAPITAL)] 
    :letter(SMALL)[index(char,distance,SMALL)]

const index = (char, distance, charType) => 
    (char.charCodeAt(0) % charType + distance) % 26;

const isUpperCase = char => char === char.toUpperCase();

const letter = offset => 
    [...Array(26)].map((_, i) => i + offset)
        .map(v => String.fromCharCode(v));



test('encryptCeaser', () => {
    expect(encryptCeaser('A', 1)).toBe('B');
    expect(encryptCeaser('B', 1)).toBe('C');
    expect(encryptCeaser('B', 2)).toBe('D');
    expect(encryptCeaser('AB', 1)).toBe('BC');
    expect(encryptCeaser('AB', 2)).toBe('CD');
    expect(encryptCeaser('z', 1)).toBe('a');
})

test('convert', () => {
    expect(convert('z', 1)).toBe('a');
    expect(convert('Z', 1)).toBe('A');
})
