/*
    - 두개의 턴마다 나눈다.
    - 보너스를 적용
    - 옵션을 적용
    - 모든 값을 더한다.
*/
const getDartGamePoint = (dartResult) => {
   
    
//    return getAppliedOption(getEachTurns(dartResult).map(getAppliedBonus)).reduce((a, b) => a+b);
   return getAppliedOption(getEachTurns(dartResult).map(v => getAppliedBonus(v))).reduce((acc, cur) => acc+cur,0);
}

const getEachTurns = (dartResult) => {
    const result = [];
    let turn = [];
    let words = '';
    dartResult.split('').forEach((v, i) => {
        if(v==='S'||v==='D'||v==='T'){
            turn.push(parseInt(words));
            turn.push(v);
            if(dartResult.charAt(i+1) == "*" || dartResult.charAt(i+1) == "#") {
                turn.push(dartResult.charAt(i+1));
            }else{
                turn.push(null);
            }
            result.push(turn);
            turn = [];
            words = '';
        }else if(v!="*" && v!="#"){
            words += v;
        }
    });

    return result;
}


const getAppliedBonus = ([score, bonus, option]) => {
         if(bonus=="S"){
             return [score,option];
         }else if(bonus=="D"){
             return [score*score,option];
         }else if(bonus=="T"){
             return [score*score*score,option];
         }
}

const getAppliedOption = (turns) => {
    const result = [];
    turns.forEach(([score, opt], i) => {
        if(opt=="*"){
            result.push(score*2);
            if(i!=0){
                result[i-1] *=2;
            }
        }else if(opt=="#"){
            result.push(score * -1);

        }else{
            result.push(score);
        }
    });
    return result;
}

test('getDartGamePoint', () => {
    expect(getDartGamePoint("1S2D*3T")).toBe(37);
})

test('getEachTurns', () => {
    expect(getEachTurns("1S2D*3T")).toEqual([[1,"S",null],[2,'D',"*"],[3,"T",null]]);
    expect(getEachTurns("1D2S#10S")).toEqual([[1,"D",null],[2,'S',"#"],[10,"S",null]]);
    expect(getEachTurns("1D2S0T")).toEqual([[1,"D",null],[2,'S',null],[0,"T",null]]);
})


test('getAppliedBonus', () => {
    expect(getAppliedBonus([1,"S",null])).toEqual([1, null]);
    expect(getAppliedBonus([2,'D',"*"])).toEqual([4, "*"]);
    expect(getAppliedBonus([3,"T",null])).toEqual([27, null]);
})

test('getAppliedOption', () => {
    expect(getAppliedOption([[1, null], [4, "*"], [27, null]])).toEqual([2, 8 ,27])
})







