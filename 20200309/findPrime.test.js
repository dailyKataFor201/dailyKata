
const solution = (input) => {
    const arr = [...Array(input)].fill(true);
    arr[0] = false;
    for(let i = 2; i < Math.sqrt(input); i++) {
        if(arr[i - 1] == true){
        getMultiple(i, input).forEach( v => {
            arr[v - 1] = false;
        })
    }
    }
    // console.log(arr);
    //2의 배수를 모두 false로 바꿈.
    return arr.filter(v => v).length;
}

const getMultiple = (num, target) => {
    const result = [];
    for(let i = 2; i * num <= target; i ++){
        result.push(i * num);
    }
    return result;
}

test('solution', () => {
    expect(solution(10)).toBe(4);
    expect(solution(5)).toBe(3);
})


test('getMultiple', () => {
    expect(getMultiple(2, 10)).toEqual([ 4, 6, 8, 10]);
    expect(getMultiple(3, 10)).toEqual([ 6, 9]);
    expect(getMultiple(4, 10)).toEqual([ 8]);
})