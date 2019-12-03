/*
    - s는 문자열, n 은 거리
    - s에 나온 각 문자들을 n만큼 밀어낸 후 만들어낸 문자열을 암호문이다.
    - 이 암호문을 만드는 함수를 만들라.

s	    n	result
AB	    1	BC
z	    1	a
a B z	4	e F d
*/


const C = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const S = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']    
const COUNT = C.length;
const getCryptoStr = (s, n) => {
   return s.split('').reduce((acc, cur) => {
        if(cur ===" "){
            return acc += " ";
        }else{ 
            if(C.indexOf(cur) != -1){  
                return acc+= C[(C.indexOf(cur)+n)%COUNT];
            }else{
                return acc += S[(S.indexOf(cur)+n)%COUNT];
            }
           
        }

    }, "");
}

test('getCryptoStr', () => {
    expect(getCryptoStr("AB", 1)).toBe("BC");
    expect(getCryptoStr("z", 1)).toBe('a');
    expect(getCryptoStr("a B z", 4)).toBe('e F d');
})