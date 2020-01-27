// () 부분을 모두 0으로 변경
// 막대기의 좌표를 구함.
// 레이저의 좌표를 구함.
// 막대기 내에 레이저가 몇개 있는지 확인하고 거기에 +1을 하면 
// 조각의 갯수임.

const getCutPieceCount = (input) => {
    const parsedInput = input.replace(/\(\)/ig,'0');
    const laizer = getLaiserPosition(parsedInput);

    return getStickPositions(parsedInput).reduce((acc, stick) =>  
        acc + laizer.filter(v => stick[0] < v && stick[1] > v).length + 1, 0);
}
const getStickPositions = (input) => {
    const result = [];
    const stack = [];
    input.split('').forEach((v,i) => {
        if(v=='('){
            stack.push(i);
        }else if(v==')'){
            result.push([stack.pop(),i]);
        }
    });
    return result;
}

const getLaiserPosition = (input) => input.split('').reduce((acc, cur, i) => cur == '0' ? [...acc,i ] : acc
    ,[])

test('getCutPieceCount', () => {
    expect(getCutPieceCount('()(((()())(())()))(())')).toBe(17);
});

test('getStickPositions', () => {
    expect(getStickPositions('0(((00)(0)0))(0)')).toEqual([ [ 3, 6 ], [ 7, 9 ], [ 2, 11 ], [ 1, 12 ], [ 13, 15 ] ])
})

test('getLaiserPosition', () => {
    expect(getLaiserPosition('0(((00)(0)0))(0)')).toEqual([0,4,5,8,10,14]);
})