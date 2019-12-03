/*
    - 문자열의 길이가 4 ~ 6인 경우가 아닌경우 false를 리턴
    - s : 숫자와 문자가 들어있는 문자열 변수
    - s에 들어 있는 값이 모두 숫자라면, true를 리턴
    - 아니면 false
*/

//아스키 숫자 범위 48 ~ 57
const isIntInStr = (s) => {

    if(s.length>=4 && s.length<=6){
        return false;
    }
    let check = true;
    s.split('').forEach((_, i) => {
        if(!(s.charCodeAt(i)>=48 && s.charCodeAt(i) <= 57)){
            check = false;
        }
    });

    return check;
        
}
test('isIntInStr', () => {
    expect(isIntInStr('a')).toBe(false);
    expect(isIntInStr('1')).toBe(true);
    expect(isIntInStr('1a')).toBe(false);
    expect(isIntInStr('a234')).toBe(false);
    expect(isIntInStr('1a34')).toBe(false);
    expect(isIntInStr('1234')).toBe(true);
})