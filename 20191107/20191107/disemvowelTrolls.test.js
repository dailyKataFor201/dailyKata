/*
- use filter method
- thinks what kinds of vowel are.

input : This website is for losers LOL!
output : Ths wbst s fr lsrs LL!

조건 ? 값1 : 값2
만약 조건이 참이라면, 조건 연산자는 값1을 값으로 갖습니다.
 그렇지 않은 경우 조건 연산자는 값2을 값으로 갖습니다. 
 표준 연산자를 사용하는 어디든 조건연산자를 사용할 수 있습니다.
*/

const VOWEL = ['a','e','i','o','u','y','A','E','I','O','U','Y'];
const disemvowelTrolls = (input) => {

    
    
//    const removedVowel =  input.split("").filter((n) => {
//         return !VOWEL.includes(n);
//     }).map((n) => {
//         return n;
//     });
    
   return input.split("").reduce((pre,cur) => {
       return !VOWEL.includes(cur) ? pre+cur : pre;
 },[]);
}

test('disemvowelTrolls', () => {
   expect(disemvowelTrolls('This website is for losers LOL!')).toBe('Ths wbst s fr lsrs LL!');
})