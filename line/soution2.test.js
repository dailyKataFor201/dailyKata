
const solution = (arr, n) => {

    
    let Ndemo = n;
    const lengths = [];
    const zeroIndex=  arr.split('').map((v, i) => v == 0 ? i : null).filter(v => v != null);
    zeroIndex.forEach(v => {
        let arrdemo = [...arr];
        Ndemo = n;
        for(let i = v; i < arr.length; i++) {
            if(arrdemo[i] == 0){
                arrdemo[i] = '1';
                Ndemo--;
            }
            if(Ndemo == 0  || i == arr.length - 1) {
                lengths.push(getLongest(arrdemo.join('')));
                return ;
            }
        }
    });

    return Math.max(...lengths);
}

const getLongest = (arr) => {
    return Math.max(...arr.split('0').map(v => v.length));
}

test('solution', () => {
    expect(solution("001100", 5)).toBe(6);
    expect(solution("111011110011111011111100011111", 3)).toBe(18);
})

test('getLongest', () => {
    expect(getLongest("0011001111100")).toBe(5);
})