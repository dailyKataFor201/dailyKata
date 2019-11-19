// console.log('a'.charCodeAt(0)-'b'.charCodeAt(0));
// const a = ['a','A','b','B'];
// console.log(a.sort().reverse().reduce((acc,cur) => {
//     return acc+cur
// },""))

/*
1.이해
    - 변수 s = 문자열 (영문 대소문자)
    - 소문자 > 대문자.
2.계획
    - String을 array로 변환해줌 split("")을 사용
    - sort를 사용하면 ascii 기준으로 ABab  A ~ Z ~ a ~ b문으로 정렬함.
    - reverse를 사용하여 거꾸로 정렬
    - 이어붙힌다.
    
*/

const sortStringDesc = (s) => 
    s.split("").sort().reverse().
    join('');


test('sortStringDesc',() => {
    expect(sortStringDesc("Zbcdefg")).toBe("gfedcbZ");
    expect(sortStringDesc("Zbcdef")).toBe("fedcbZ");
});