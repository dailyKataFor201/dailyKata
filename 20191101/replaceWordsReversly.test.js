
/**
 문제 2 - 주어진 문자열을 띄어쓰기 단위로 뒤집어서 나열한다.
‘I am a boy.’ -> ‘boy. a am I’

1. 이해
 - 주어진것
    - 띄어쓰기가 존재하는 문장.
 - 알고있는것
    - 띄어쓰기가 존재하는 문장.
 - 모르는것.
    - 어떻게 구할까? 
2. 계획
    - 띄어쓰기를 기준으로 나눈다.
    - 배열에 담는다.
    - 배열의 거꾸로 부터 읽어서 붙혀준다.
3. 실행
4. 반성
*/
const replaceEachWordsReverse = (input) => {

    return makeSentenceWithEachWords(reverseArray(splitSentence(input)));
}

const splitSentence = (input) => {
    return input.split(' ');
}

const reverseArray = (eachWords) => {
    return eachWords.reverse();
}

const makeSentenceWithEachWords = (eachWords) => {
    let result = "";
    
    eachWords.forEach((element , i) => {
        if( i != eachWords.length -1){
        result += element+" ";
        }else{
            result += element;  
        }
    });
    return result;
}

test('replaceEachWordsReverse', () => {
    expect(replaceEachWordsReverse('I am a boy.')).toBe('boy. a am I');
    expect(replaceEachWordsReverse('a b c')).toBe('c b a');
});

test('splitSentence', () => {
    expect(splitSentence('I am a boy.')).toEqual(['I', 'am', 'a', 'boy.']);
});

test('reverseArray', () => {
    expect(reverseArray(['I', 'am', 'a', 'boy.'])).toEqual(['boy.', 'a', 'am', 'I']);
});

test('makeSentenceWithEachWords', () => {
    expect(makeSentenceWithEachWords(['boy.', 'a', 'am', 'I'])).toBe('boy. a am I');
    expect(makeSentenceWithEachWords(['I', 'am', 'a', 'boy.'])).toBe('I am a boy.');
});