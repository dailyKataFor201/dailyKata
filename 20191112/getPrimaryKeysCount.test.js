/*
계획 1
- i를 2부터 n까지 수를 루프로 돌림
- i를 매번 2 ~ i-1까지 나눴을때 나머지가 0이 나오면 소수가 아님
계획 2
- 배열 인덱스에 2 ~ n 까지 사용 빈배열임.
- 그 이후에 데이터를 인덱스를 받아가면서 값을 확인
    - undefined 경우
        - 해당 수가 소수인지 아직 검증 되지 않았으므로, 해당 수가 소수인지 확인
            - 소수라면
                - 자신 빼고 해당 수의 배수를 인덱스에서 true 변경
                - 카운트를 ++ 해줌.
            - 소수가 아니라면
                - 그냥 넘어감.
    -  true
        - 이미 소수가 아니라고 확인 했으므로 넘어감.

*/


// 1, 2, 3, 4, 5, 6, 7, 8 , 9 ,10

const getPrimaryKeysCount = (number) => {
    const array = [];
    let count = 0;
    for(let i=2; i<=number; i++){
        if(array[i] == undefined){
            if(isPrimaryInt(i)){
                count++;
                let shit = 1;
                while(shit * i <= number){
                    array[shit * i] = true;
                    shit++;
                }
                // for(let k = i; k<= number; k++){
                //     if(k%i==0) {
                //         array[k] = true
                //         console.log(array);
                //     };
                // }
                
            }
        }
    }
    return count;
}


const isPrimaryInt = (value) => {
    if(value == 1) return false;
    
    for(let j = 2; j<= value; j++){
        if(value==j){
            return true;
        }
        if(value%j == 0){
            return false;
        }
         
    }
    
}

test('getPrimaryKeysCount', () => {
    
    expect(getPrimaryKeysCount(10)).toBe(4);
    expect(getPrimaryKeysCount(5)).toBe(3);
    expect(getPrimaryKeysCount(11)).toBe(5);
})

test('isPrimaryInt', () => {
    expect(isPrimaryInt(1)).toBe(false);
    expect(isPrimaryInt(2)).toBe(true);
    expect(isPrimaryInt(10)).toBe(false);
    expect(isPrimaryInt(11)).toBe(true);
    expect(isPrimaryInt(131)).toBe(true);
    expect(isPrimaryInt(112)).toBe(false);
})