/*
1. 만들어질 수 있는 모든 경우의 수를 구한다.
2. 하나씩 일단 hash를 사용하여 값을 저장.
3. 앞에 있는 0을 모두 지우고 만약에 동일한게 있다면 패스
*/

const solution = (str) => {
    const nums = str.split('');
    const count = 0;
    const primes = [];

    nums.filter(v => {
        return primes.indexOf(v) == -1;
    })

    return 3;
}

const getAllCases = (arr) => {

    if (arr.length == 1) {
        return [arr[0]];
    }
    if (arr.length == 2) {
        return [arr[0], arr[1], arr[0] + arr[1], arr[1] + arr[0]];
    }
    if (arr.length == 3) {
        return [arr[0], arr[1], arr[2], arr[0] + arr[1], arr[0] + arr[2], arr[1] + arr[0], arr[1] + arr[2], arr[2] + arr[0], arr[2] + arr[1], arr[0] + arr[1] + arr[2], arr[0] + arr[2] + arr[1], arr[1] + arr[0] + arr[2], arr[1] + arr[2] + arr[0], arr[2] + arr[0] + arr[1], arr[2] + arr[1] + arr[0]];
    }
}

const getCasesOfN = (n, arr) => {
    const result = [];

    if (n == 1) {

        for (let i = 0; i < arr.length; i++) {
            if (result.indexOf(arr[i]) == -1) {
                result.push(arr[i]);
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (result.indexOf(arr[i]) == -1 && i != j) {
                    result.push(arr[i] + arr[j]);
                }
            }
        }
        return result;

    }
    return result;


}

const recursive = (pickNum, stats, arr, result) => {
    //stat이 비어있으면 상태를 넣어줌.
    if (stats.length == 0) {
        for (let i = 0; i < arr.pickNum; i++) {
            stats.push(0);
        }
    }
    //종료 조건
    if (stats.filter(v => v == arr.length - 1).length == arr.length) {
        return result;
    }

    //stat의 각 자리에 index가 꽉찬게 있다면 올려줘야함.
    let i = findFullIndex(arr.length, stats);
    if (i != -1) {
        stats[i] = 0;
        stats[i + 1] += 1;
        return recursive(pickNum, stats, arr, result);
    }


    const value = [];
    for (let i = 0; i < stats.length; i++) {
        value.push(arr[i]);
    }
    result.push(value.join);
    stats[stats.length - 1] += 1;

    return recursive(pickNum, stats, arr, result);
}

const findFullIndex = (max, stats) => {

    return stats.indexOf(max);
}

test('solution', () => {
    expect(solution("17")).toBe(3);
})

test('getAllCases', () => {
    expect(getAllCases(["1"])).toEqual(["1"]);
    expect(getAllCases(["1", "7"])).toEqual(["1", "7", "17", "71"]);
    expect(getAllCases(["2", "3"])).toEqual(["2", "3", "23", "32"]);
    expect(getAllCases(["0", "1"])).toEqual(["0", "1", "01", "10"]);
    expect(getAllCases(["1", "2", "3"])).toEqual(["1", "2", "3", "12", "13", "21", "23", "31", "32", "123", "132", "213", "231", "312", "321"]);
})

test("getCasesOfN", () => {
    expect(getCasesOfN(1, ["1"])).toEqual(["1"]);
    expect(getCasesOfN(1, ["1", "2"])).toEqual(["1", "2"]);
    expect(getCasesOfN(1, ["1", "2", "3"])).toEqual(["1", "2", "3"]);
    expect(getCasesOfN(1, ["1", "2", "3", "2"])).toEqual(["1", "2", "3"]);
    expect(getCasesOfN(2, ["1", "2"])).toEqual(["12", "21"]);
    expect(getCasesOfN(2, ["1", "2", "3"])).toEqual(["12", "13", "21", "23", "31", "32"]);
})

test("recursive", () => {
    expect(recursive(1, [], ["1"], [])).toEqual(["12", "21"]);
    // expect(recursive(2, [], ["1", "2"], [])).toEqual(["12", "21"]);
    // expect(recursive(2, [], ["2", "4"], [])).toEqual(["24", "42"]);
})

test("findFullIndex", () => {
    expect(findFullIndex(1, [0, 0])).toBe(-1);
    expect(findFullIndex(2, [0, 2])).toBe(1);
    expect(findFullIndex(2, [0, 2])).toBe(1);
    expect(findFullIndex(3, [0, 2, 3])).toBe(2);
})