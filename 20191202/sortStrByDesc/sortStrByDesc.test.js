/*
   - s는 문자열을 입력 받음.
    - js 에서의 sort는 utf-8 문자열 순으로 정렬을 함. 대문자 < 소문자
    - s는 대소문자로만ㄴ 구성 되어 있음.
*/

const sortStrByDesc = (s) => {
    return s.split('').reverse().join('');
}

test("sortStrByDesc", () => {
    // expect(sortStrByDesc('efg')).toBe('gfe');
    expect(sortStrByDesc('Zbcdefg')).toBe('gfedcbZ');
});