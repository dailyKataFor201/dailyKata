// /*
// 문제 2 - 주어진 문자열을 띄어쓰기 단위로 뒤집어서 나열한다.
// ‘I am a boy.’ -> ‘boy. a am I’

// 1. 이해
//     - 주어진것 : string 형태의 공백이 존재하는 문장.
//     - 아는것 : 공백을 기준으로 잘라 거꾸로 나열하라
//     - 모르는것 : 어케함 ?
// 2. 계획
//     - 공백을 기준으로 잘라서 
//     - 거꾸로 한후에
//     - 마지막 것만 공백을 넣어주지 않고, 이어붙힌다.
// 3. 실행
// 4. 반성
// */

// const reverseEachWords = (intputStr) => {
   
//     return arrayIntoStr(reverseArray(splitSentence(intputStr)));
// }

// const splitSentence = () => {
//     return ['I', 'am', 'a', 'boy.']
// }

// const reverseArray = (inputArray) => {
//     return inputArray.reverse();
// }

// const arrayIntoStr = (inputArray) => {
//     let result = '';
//     inputArray.forEach((element,i) => {
//         if(i!=0){
//             result = result+" "+element;
//         }else{
//             result = result+element;
//         }
//     });
//     return result;
// }

// const arrayIntoStrRecursive = (inputArray,l) => {
   
//     if(l==0){
//         return "";
//     }
//     return arrayIntoStrRecursive(inputArray,l)+inputArray[l-1];
// }


// test('reverseEachWords', () => {
//     expect(reverseEachWords('I am a boy.')).toBe('boy. a am I');
// });

// test('splitSentence', () => {
//     expect(splitSentence('I am a boy.')).toEqual(['I', 'am', 'a', 'boy.']);
// });

// test('reverseArray', () => {
//     expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
// });

// test('arrayIntoStr', () => {
//     expect(arrayIntoStr(['I', 'am', 'a', 'boy.'])).toEqual('I am a boy.');
// });

// test('arrayIntoStrRecursive', () => {
//     expect(arrayIntoStrRecursive(['I', 'am', 'a', 'boy.'],4)).toBe('boy. a am I')
// });