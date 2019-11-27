/*
    - 무식한 방법
        - p의 개수를 센다
        - y의 개수를 센다
        - 같은지 확인한다.
    - 무식한 방법 2
        - 0인 변수를 생성
        - p가 나오면 -1, y가 나오면 +1을 해줌
        - 마지막에 0이 나오면 개수가 같으므로 true를 리턴
        - 아니면 false
    - 정규화를 이용한 방법
        - y의 개수만 가져옴
        - p의 개수만 가져옴
        - 같은지 확인
    - 새로운 창의적인 방법
        
*/

// const isWordsCountSame = (strValue) => {
//     var pCount = 0;
//     var yCount = 0;
//     strValue.toLowerCase().split('').forEach(v => {
//         if(v === 'p') pCount += 1;
//         if(v === 'y') yCount += 1;
//     });
//     return pCount == yCount ? true : false;
// }

// const isWordsCountSame = (strValue) => {
//    const result =  strValue.toLowerCase().split('').reduce((acc,cur) => {
//         if(cur == 'y') return acc + 1;
//         if(cur == 'p') return acc - 1;
//         return acc;
//     }, 0);

//     return result == 0 ? true : false;
// }

const isWordsCountSame = (strValue) => {
 
    return strValue.match(/y/ig).length == strValue.match(/p/ig).length ? true : false;
 }

test('isWordsCountSame', () => {
    expect(isWordsCountSame('pPoooyY')).toBe(true);
    expect(isWordsCountSame('Pyy')).toBe(false);
});