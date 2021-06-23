/*
  - 모든 글자를 소문자로 변경
  - 2글자씩 자르며 특수 문자가 들어있는지 확인해서 있으면 버린다.
  - 교집합의 수를 구한다.
  - 둘다 더해서 교집합을 뺀다.
  - 교집합 / 합집합 * 65536 한다.
  - 교집합과 합집합이 0이라면 1을 리턴한다.
*/

const solution = (str1, str2) => {
  const s1 = devide(str1.toLowerCase());
  const s2 = devide(str2.toLowerCase());
  const interCnt = intersection(s1, s2).length;
  const unionCnt = s1.length + s2.length - interCnt;

  let target = !interCnt && !unionCnt ? 1 : interCnt/unionCnt;
 
  return Math.floor(target * 65536);
}

const devide = (str) => {
  const result = [];
  for(let i = 0; i < str.length - 1; i++) {
    const word = `${str[i]}${str[i+1]}`;
    if(isEnglish(word)) result.push(word);
  }
  return result;
}

const isEnglish = (str) => {
  const rule = /[a-z]{2}/;
  const reg = new RegExp(rule);
  return reg.test(str);
};

const intersection = (arr1, arr2) => {
  const result = [];
  let origin;
  let target;
  
  if(arr1 > arr2) {
    origin = [...arr2];
    target = [...arr1];
  } else {
    origin = [...arr1];
    target = [...arr2];
  }
  let tmp
  while(tmp = origin.shift()) {
    let i = target.indexOf(tmp);
    if(i !== -1) {
      result.push(target[i]);
      target.splice(i, 1);
    }
  }
  return result;
}

test('solution', () => {
  expect(solution('FRANCE', 'french')).toBe(16384);
  expect(solution('handshake', 'shake hands')).toBe(65536);
  expect(solution('aa1+aa2', 'AAAA12')).toBe(43690);
  expect(solution('E=M*C^2', 'e=m*c^2')).toBe(65536);
});

test('devide', () => {
  expect(devide('france')).toEqual(['fr','ra','an','nc','ce']);
  expect(devide('aa1+aa2')).toEqual(['aa','aa']);
});

test('isEnglish', () => {
  expect(isEnglish('aa')).toBe(true);
  expect(isEnglish('a1')).toBe(false);
});

test('intersection', () => {
  expect(intersection([1,2,3,4],[1,2])).toEqual([1,2]);
  expect(intersection([ 'fr', 'ra', 'an', 'nc', 'ce' ],[ 'fr', 're', 'en', 'nc', 'ch' ])).toEqual(['fr','nc']);
});