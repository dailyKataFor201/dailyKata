//괄호가 반드시 열리고 닫힌 짝이어야함.

//그러면 괄호를 열고 열린 개수를 세고 닫힌다면 빼준다. 
const solution = (brackets) => {
    const gen = generator(brackets.split(''));
    let nextResult = gen.next();
    let result ;
    while(!nextResult.done){
        if(nextResult.value < 0) {
            return false;
        }
        nextResult = gen.next();
        if(nextResult.value != null){
            result = nextResult.value;
        }
    }
    if(result==0) {
        return true;
    }
    return false;
}


function* generator(brackets) {
    let result = 0;
    for(let i = 0 ; i < brackets.length ; i ++) {
        if(brackets[i] === '(') {
            yield ++result;
        }else if(brackets[i] === ')') {
            yield --result;
        }else {
            yield result;
        }
}
}

test('solution', () => {
    expect(solution("(")).toBe(false)
    expect(solution(")")).toBe(false)
    expect(solution("()")).toBe(true)
    expect(solution("()(")).toBe(false)
    expect(solution("()()")).toBe(true)
    expect(solution("(())")).toBe(true)
    expect(solution("(())()")).toBe(true)
    expect(solution(")()(")).toBe(false)
    expect(solution("(()(")).toBe(false)
})
