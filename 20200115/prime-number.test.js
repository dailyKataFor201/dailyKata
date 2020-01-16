const getPrimeNumberCount = (arr) => {

    const array = [1, 2, 3, 4];
    console.log(...array);
    return picks(arr).map(arr => arr[0]+arr[1]+arr[2]).filter(v => isPrimeNumber(v)).length;
}

const isPrimeNumber = (number) => {
    for (let i = 2; i < number - 1; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

const picks = (arr) => {
    let i, j, k = 0;
    const result = [];
    for(i = 0; i < arr.length - 2; i++){
        for(j = i + 1; j < arr.length - 1; j++) {
            for(k = j + 1; k < arr.length; k++){
                result.push([arr[i], arr[j], arr[k]]);
            }
        }
    }
    
    return result;
}
test('getPrimeNumberCount', () => {
    expect(getPrimeNumberCount([1, 2, 3, 4])).toBe(1);
})

test('isPrimeNumber', () => {
    expect(isPrimeNumber(6)).toBe(false);
    expect(isPrimeNumber(7)).toBe(true);
    expect(isPrimeNumber(171)).toBe(false);
})

test('picks', () => {
    expect(picks([1, 2, 3, 4])).toEqual([[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]);
})