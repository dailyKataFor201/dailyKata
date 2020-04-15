
/*
1. 필터를 써서 배열로 하나씩 확인하여 괄호가 없다면 0을 리턴
2. ({{< 는 (로 취급하고,)>}})는 )로 취급하여 짝이 맞는지 확인한다.
*/
const OPEN = ['(','{','[','<'];
const CLOSE = [')','}',']','>'];
const solution1 = (arr) => {
    const brackets = arr.split('').filter(isBracket);
    if(brackets.length == 0){
        return 0;
    }else{
        return check(brackets.map(transfer));
    }
    
}

const isBracket = (word) => {
    return OPEN.filter(bracket => word == bracket).length != 0 || CLOSE.filter(bracket => word == bracket).length != 0;
} 

const transfer = (word) => {
    switch(word) {
        case '{' : return '(';
        case '}' : return ')';
        case '(' : return '(';
        case ')' : return ')';
        case '[' : return '(';
        case ']' : return ')';
        case '<' : return '(';
        case '>' : return ')';

    }
    return '(';
}

const check = (brackets) => {
    const mapper = brackets.join('').replace(/\(\)/g, 0).split('');
    if(mapper.filter(v => v ==')' || v =='(').length != 0){
        return -1;
    }else {
        return mapper.filter(v => v == '0').length;
    }
}

test('solution1', () => {
    expect(solution1("Hello, world!")).toBe(0)
    expect(solution1("line [plus]1")).toBe(1);
    expect(solution1("if (Count of eggs is 4.) {Buy milk.)")).toBe(2);
    expect(solution1(">_<")).toBe(-1);
})

test('isBracket', () => {
    expect(isBracket('(')).toBe(true);
    expect(isBracket(')')).toBe(true);
    expect(isBracket('{')).toBe(true);
    expect(isBracket(']')).toBe(true);
    expect(isBracket('<')).toBe(true);
})

test('transfer', () => {
    expect(transfer('{')).toBe('(');
    expect(transfer('}')).toBe(')');
})

test('check', () => {
    expect(check(['(',')'])).toBe(1);
})