/*
    - 각 단어를 배열로 쪼갠다.
    - 각 단어의 인덱스가 짝수면 대문자로, 홀수면 소문자로 변경한다.
    - 다시 합쳐준다.
*/

const getStrangeStr = (str) => str.split(' ').
    map(v => v.split('').map((char, i) => isEven(i) ?
        char.toUpperCase() : char.toLowerCase()).join(''))
    .join(' ');


const isEven = (v) => v % 2 == 0;

test('getStrangeStr', () => {
    expect(getStrangeStr('try hello world')).toBe('TrY HeLlO WoRlD');
})