/*
  1. 연산자 우선순위의 경우의 수를 구한다.
  2. 해당 연산자를 먼저 해결하면서 값을 처리한다.
  3. 가장 높은 값을 찾아낸다.
*/

const solution = (expression) => {
  const seperatedExpress = seperateOperator(expression);
  const validOperator = getOperators(seperatedExpress);
  const cases = permutation(validOperator, validOperator.length);
  
  return getMaxResult(seperatedExpress, cases);
}

const getMaxResult = (expression, cases) => {
  let max = 0;
  for(const priority of cases) {
    let targetExpression = [...expression];
    const stack = [];
    priority.forEach((op, i) => {
      targetExpression.forEach((el, i) => {
        if(targetExpression[i - 1] === op) {
          const targetOperator = stack.pop();
          const operand = stack.pop();
          stack.push(operators[targetOperator](operand, el));
        }else {
          stack.push(el);
        }
      });
      targetExpression = stack;
    });
    const result = Math.abs(stack.pop());
    if(result > max) max = result;
  }
  return max;
}

test('operators', () => {
  expect(operators['+'](1, 1)).toBe(2);
  expect(operators['-'](1, 1)).toBe(0);
  expect(operators['*'](2, 4)).toBe(8);
});

test('getMaxResult', () => {
  expect(getMaxResult([ 2, '*', 1, '*', 3 ], [ ['*'] ])).toBe(6);
  expect(getMaxResult([ 2, '*', 1, '-', 3 ], [ [ '*', '-' ], [ '-', '*' ] ])).toBe(4);
});

test('solution', () => {
  expect(solution("2*1-3")).toBe(4);
  expect(solution("100-200*300-500+20")).toBe(60420);
});
const operators = {
  '+':(op1, op2) => op1 + op2,
  '-':(op1, op2) => op1 - op2,
  '*':(op1, op2) => op1 * op2,
};

const seperateOperator = (s) => {
  const result = [];
  let mark = 0;
  [...s].forEach((c, i) => {
    if(operators[c]) {
      result.push(+s.substr(mark, i-mark));
      mark = i + 1;
      result.push(c);
    }
    if(i ===  s.length- 1) {
      result.push(+s.substr(mark));
    }
  });
  return result;
}

test('seperateOperator', () => {
  expect(seperateOperator('2*1')).toEqual([2, '*', 1]);
  expect(seperateOperator('22*1-12')).toEqual([22, '*', 1, '-', 12]);
  expect(seperateOperator('2*1-3')).toEqual([2, '*', 1, '-', 3]);
});

const getOperators = (arr) => {
  return [...new Set(arr.filter(el => operators[el]))];
}

test('getOperators', () => {
  expect(getOperators([2, '*', 1])).toEqual(['*']);
  expect(getOperators([22, '*', 1, '-', 12])).toEqual(['*','-']);
  expect(getOperators([22, '*', 1, '-', 12, '+', 13])).toEqual(['*','-', '+']);
});

function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}