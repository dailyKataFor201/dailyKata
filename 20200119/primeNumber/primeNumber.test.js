/*
    - 3개를 갖는 모든 배열을 뽑는다.
    - filter를 사용하여 소수인 경우를 뽑는다.
    - 갯수를 뽑는다.
*/
const getPrimeNumberCount = (arr) =>  picks(arr).map(v => v.reduce((acc, cur) => acc+cur))
            .filter(v => isPrime(v))
            .length;


const isPrime = (num) => {
    for(let i = 2 ; i < num ; i ++) {
        if (num % i ==0 && num != i) {
            return false
        }
    }
    return true;
}

const picks = (arr) => {
    let i, j, k ;
    let result = []
    for( i = 0;i < arr.length-2; i++){
        for(j = i + 1;j < arr.length-1; j++){
            for(k = j + 1; k< arr.length; k++){
                result.push([arr[i],arr[j],arr[k]]);
            }
        }
    }
    return result;
}

test('getPrimeNumberCount', () => {
    expect(getPrimeNumberCount([1, 2, 3, 4])).toBe(1);
})

test('isPrime', () => {
    expect(isPrime(3)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(171)).toBe(false);
    expect(isPrime(196)).toBe(false);
    expect(isPrime(196)).toBe(false);
})

test('picks', () => {
    expect(picks([1, 2, 3, 4])).toEqual([[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]);
})
