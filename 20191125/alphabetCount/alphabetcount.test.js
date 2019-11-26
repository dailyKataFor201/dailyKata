/*
- 전략 1
        - 대문자 또는 소문자로 변경하여 하나만 계산한다.
        - 문자열 s를 순회하면서 p와 y의 개수를 각각 센다.
        - 같은지 확인한다.
    - 전략 2
        - 대문자 또는 소문자로 변경하여 하나만 계산한다
        - 정수 배열을 0으로 초기화 하여, 문자열 s를 순회하면서 p가 나오면 +1, y나오면 -1
        - 결과값이 0이라면, 개수가 동일하므로 true, 이외엔 false
    - 전략 3
        - 정규 표현식을 사용하여, p와 y의 값을 구하고, 길이를 확인하여
        - 같으면 true, 이외엔 false
*/

const checkWordCountIsSame = (strValue) => {
    // var ycount = 0 ;
    // var pcount = 0;
    // strValue.toLowerCase().split("").forEach(element => {
    //     if(element==='y') ycount += 1;
    //     if(element==='p') pcount += 1;
    // });
    // return ycount===pcount ? true : false;

//    const result = strValue.toLowerCase().split("").reduce((acc, curr) => {
//         if(curr==='y') return acc +1
//         if(curr==='p') return acc -1
//         return acc;
//     }, 0);
//     return result == 0 ? true : false;

    console.log(strValue.match(/[p,y]/ig))
    return strValue.match(/p/ig).length === strValue.match(/y/ig).length ? true : false;
    
}
test('checkWordCountIsSame', () => {
    expect(checkWordCountIsSame("pPoooyY")).toBe(true);
    expect(checkWordCountIsSame("Pyy")).toBe(false);
})