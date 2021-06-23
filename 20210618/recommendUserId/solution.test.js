const solution = (s) => {
  const ops = [first, second, third, fourth, fifth, sixth, seven, fourth];
  let result = s;
  ops.forEach(v => {
    result = v.operate(result);
  })
  return result;
}

test('solution', () => {
  expect(solution("...!@BaT#*..y.abcdefghijklm")).toBe("bat.y.abcdefghi");
  expect(solution("z-+.^.")).toBe("z--");
  expect(solution("=.=")).toBe("aaa");
  expect(solution("123_.def")).toBe("123_.def");
  expect(solution("abcdefghijklmn.p")).toBe("abcdefghijklmn");
});
const first = {
  operate(s) {
    return s.toLowerCase();
  }
};

const second = {
  validCharacter: ['-','_','.','1','2','3','4','5','6','7','8','9','0'],
  isValid(s) {
    return this.validCharacter.includes(s) || (s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122) || (s.charCodeAt(0) >= 48 && s.charCodeAt(0) <= 57)
  },
  operate(s) {
    const result = [];
    for(let char of s) {
      if(this.isValid(char)) result.push(char);
    }
    return result.join('');
  }
}

const third = {
  operate(s) {
    return s.replace(/(\.)+/gi, '.');
  }
}

const fourth = {
  operate(s) {
    const target = [...s];
    while(target[0] === '.') {
      target.shift();
    }
    while(target[target.length-1] === '.') {
      target.pop();
    }
    return target.join('');
  }
}

const fifth = {
  operate(s) {
    return s.replace(/( )+/gi, '');
  }
}

const sixth = {
  operate(s) {
    return s.substr(0, 15);
  }
}

const seven = {
  operate(s) {
    if(s.length < 3) {
      let result;
      if(s.length == 0) result = ['a'];
      else result = [...s];

      while(result.length < 3) {
        result.push(result[result.length-1]);
      }
      return result.join('');
    }else {
      return s;
    }
  }
}




test('second', () => {
  expect(second.operate("...!@bat#*..y.abcdefghijklm")).toBe("...bat..y.abcdefghijklm");
});

test('third', () => {
  expect(third.operate("...bat..y.abcdefghijklm")).toBe(".bat.y.abcdefghijklm");
});


test('fourth', () => {
  expect(fourth.operate(".bat.y.abcdefghijklm")).toBe("bat.y.abcdefghijklm");
});
test('fifth', () => {
  expect(fifth.operate("bat. y.abcde fghi jklm")).toBe("bat.y.abcdefghijklm");
})

test('sixth', () => {
  expect(sixth.operate("bat.y.abcdefghijklm")).toBe("bat.y.abcdefghi");
  expect(sixth.operate("bat.y.")).toBe("bat.y.");
})

test('seven', () => {
  expect(seven.operate("z-")).toBe("z--");
})