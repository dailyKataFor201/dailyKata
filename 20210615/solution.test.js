/*
    - 유효한 문자들만 걸러냄
    - 2개씩 잘라서 배열에 넣음
    - 교집합과 합집합을 구함
      - 동일한 값이 여러개 있다면, 
    - 답 반환
*/

const isValid= (v) => {
  const target = v.charCodeAt(0);
  return (65 <= target && target <= 90) || (97 <= target && target <= 122);
}

//이부분을 제너레이터로 지연 실행하여 만들어주면 좋을것 같다.
const solution = (first, second) => {
  const f = joinBy([...first].filter(v => isValid(v)), 2).map(v=>v.toLowerCase());
  const s = joinBy([...second].filter(v => isValid(v)), 2).map(v=>v.toLowerCase());
  console.log(f, s);

  const interCnt = intersection(f,s);
  const unionCnt = union(f, s);
  // const unionCnt = f.length + s.length - interCnt;
  console.log('===========',interCnt, unionCnt);

  return interCnt/unionCnt * 65536;
}

test('solution', () => {
  // expect(solution('FRANCE', 'french')).toBe(16384);
  // expect(solution('aa1+aa2',	'AAAA12')).toBe(43690);
  expect(solution('handshake',	'shake hands')).toBe(65536);
  // expect(solution('E=M*C^2', 'e=m*c^2')).toBe(65536);
});

const joinBy = (str, num) => {
  const result = [];
  for(let i = 0; i < str.length; i++) {
    if(i < str.length - 1) {
      result.push(`${str[i]}${str[i+1] ?? ''}`);
    }
  }
  return result;
}

test('joinBy', () => {
  expect(joinBy('aaaaa',2)).toEqual((['aa', 'aa', 'aa', 'aa']));
});

const intersection = (f, s) => {
  const first = [...f];
  const second = [...s];
  const result = [];
  let origin;
  let target;
  if (first.length < second.length) {
    origin = first;
    target = second;
  } else {
    origin = second;
    target = first;
  }
  let originChar;
  origin.reverse();
  
  while(originChar = origin.pop()) {
    const charIndex = target.indexOf(originChar);
    if(charIndex !== -1) {
      result.push(originChar);
      target.splice(charIndex, 1);
    }
  }
  return result.length;
}

test('intersection', () => {
  expect(intersection([1, 1, 2, 2, 3], [1, 2, 2, 4, 5])).toEqual(3);
});

const union = (f, s) => {
  const first = [...f];
  const second = [...s];
  const result = [];
  let origin;
  let target;
  if (first.length < second.length) {
    origin = first;
    target = second;
  } else {
    origin = second;
    target = first;
  }
  let originChar;
  origin.reverse();
  
  while(originChar = origin.pop()) {
    const charIndex = target.indexOf(originChar);
    if(charIndex !== -1) {
      result.push(originChar);
      target.splice(charIndex, 1);
    }else {
      result.push(originChar);
    }
  }
  return [...result, ...target].length;
}

test('union', () => {
  expect(union([1, 1, 2, 2, 3], [1, 2, 2, 4, 5])).toEqual(7);
});


const getAllCases = (str) =>{
  const result = [];
  for(let i = 0; i < str.length; i++) {
    if(i < str.length - 1) {
      result.push(`${str[i]}${str[i+1] ?? ''}`);
    }
  }
  return result;
};

test('getAllCases', () => {
  expect(getAllCases('FRANCE')).toEqual([ 'FR', 'RA', 'AN', 'NC', 'CE' ]);
});