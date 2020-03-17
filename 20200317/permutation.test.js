
const solution = (arr) => {
    
    
    return permutation([...arr],0,[]);
}

const permutation = (arr, start, result) => {

    if (start == arr.length - 1) 
        return result.push(arr.join(''));
    
    for (let i = start; i < arr.length; i++) {
        permutation(swap(arr, start, i), start + 1, result);
    }
    return result;
}

const swap = (arr,from,to) => {
    const copy = [...arr];
    const tmp = copy[from];
    copy[from] = copy[to];
    copy[to] = tmp;
    return copy;
}

test('solution', () => {
    expect(solution('ABC')).toEqual(['ABC','ACB','BAC','BCA','CBA','CAB']);
});


test('swap', () => {
    expect(swap(['A','B','C'],0,1)).toEqual(['B','A','C']);
    expect(swap(['A','B','C'],0,2)).toEqual(['C','B','A']);
});