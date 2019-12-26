// const numbers = [1, 2, 4];

// const convertTo124 = (num) => {
//     if (num < 4) {
//         return numbers[(num - 1) % 3];
//     }
//     // if (num < 7) {
//         // num 4
//         return numbers[(num - 1) % 3] + 10 * convertTo124(Math.floor((num - 1) / 3));
//     // }

//     // if (num < 10) {
//     //     return numbers[(num - 1) % 3] + 10 * convertTo124(2) ;
//     // }

//     // if (num < 13) {
//     //     return numbers[(num - 1) % 3] + 10 * convertTo124(3);
//     // }
//     // if (num < 16) {
//     //     return numbers[(num - 1) % 3] + 10 * convertTo124(1) + 100 * convertTo124(1);
//     // }
// };

const number = [1, 2, 4]
const convertTo124 = (num) => {
    if (num < 4) return number[num - 1];

    return number[(num - 1) % 3] + 10 * convertTo124(Math.floor((num - 1) / 3));
}

test('run', () => {
    expect(convertTo124(1)).toBe(1);
    expect(convertTo124(2)).toBe(2);
    expect(convertTo124(3)).toBe(4);
    expect(convertTo124(4)).toBe(11);
    expect(convertTo124(5)).toBe(12);
    expect(convertTo124(6)).toBe(14);
    expect(convertTo124(7)).toBe(21);
    expect(convertTo124(8)).toBe(22);
    expect(convertTo124(9)).toBe(24);
    expect(convertTo124(10)).toBe(41);
    expect(convertTo124(11)).toBe(42);
    expect(convertTo124(12)).toBe(44);
    expect(convertTo124(13)).toBe(111);
    expect(convertTo124(14)).toBe(112);
    expect(convertTo124(15)).toBe(114);
});