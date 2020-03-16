const permute = (str) => {
    const result = [];
    for(let i = 0; i < str.length; i++){
        result.push(swap(str,0,i));
    }
    recuresivePermute(str.split(''),0,0,[]);
    // console.log(result);
    return [str[0]+str[1]+str[2], str[0]+str[2]+str[1],
            str[1]+str[0]+str[2], str[1]+str[2]+str[0],
            str[2]+str[1]+str[0], str[2]+str[0]+str[1]];
}

const swap = (arr, a, b) => {
    const words = [...arr];
    const tmp = arr[a];
    words[a] = arr[b];
    words[b] = tmp;
    return words;
}

const recuresivePermute = (str, start, result) => {
    
    if(start == str.length - 1) {
        return result.push(str.join(''));
    }

    for(let i = start; i < str.length; i ++) {
        recuresivePermute(swap(str,start,i), start + 1, result);
    }

    return result;
}

test('permute', () => {
    expect(permute("ABC")).toEqual(["ABC","ACB","BAC","BCA","CBA","CAB"]);
})

test('swap', () => {
    expect(swap(['A','B','C'],0,1)).toEqual([ 'B', 'A', 'C' ]);
})

test.only('recuresivePermute', () => {
   expect(recuresivePermute(['A','B','C'],0,[])).toEqual(['ABC', 'ACB', "BAC", "BCA", "CBA", "CAB"]);
   expect(recuresivePermute(['A','B','C','D'],0,[])).toEqual(['ABC', 'ACB', "BAC", "BCA", "CBA", "CAB"]);
})