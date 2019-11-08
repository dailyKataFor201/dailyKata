// /*
// 문제 1 - 주어진 정수를 문자열로 변환한다.
// ex) 1234 -> ‘1234’

// 1. 이해
//     - 주어진 값이 정수(0보다 큰)
//     - 정수를 어떻게 string으로 바꿀것인가.
// 2. 계획
//     - 각 자릿수를 나눈다.
//     - 각 자릿수를 문자열로 만들어 더해준다. 

// 3. 실행

// 4. 반성.
//     - 그냥 너무 예상 대로 했음.
// */

// const int2strRecursionV = (inputInt) => {
//     if(inputInt == 0) {
//         return "";
//     }

//     return int2strRecursionV(parseInt(inputInt/10))+inputInt%10;
// }

// const int2str = (inputInt) => {
  
//     return wordsToString(strToEachWords(inputInt));
// }

// const getLastChar = (inputInt) => {
    
//     return inputInt%10;
// }

// const strToEachWords = (inputInt) => {
//     let eachCharIntoArray = [];
//     while(inputInt!=0){
//         eachCharIntoArray.unshift(getLastChar(inputInt));
//         inputInt = parseInt(inputInt/10);
//     }
//     return eachCharIntoArray;
// };

// const wordsToString = (eachWords) => {
//     result = "";
//     eachWords.forEach(element => {
//         result = result + element;
        
//     });
//     return result;
// }


// test('int2str', () => {
//     expect(int2str(1234)).toBe('1234');
// });

// test('getLastChar', () => {
//     expect(getLastChar(1234)).toBe(4);
// });

// test('strToEachWords', () => {
//     expect(strToEachWords(1234)).toEqual([1, 2, 3, 4]);
//     expect(strToEachWords(123)).toEqual([1, 2, 3]);
// });

// test('wordsToString', () => {
//     expect(wordsToString([1, 2, 3, 4])).toBe('1234');
// })

// test('int2strRecursionV', () => {
//     expect(int2strRecursionV(1234)).toBe('1234');
//     expect(int2strRecursionV(4321)).toBe('4321');
// })