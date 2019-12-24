/*
    - 맨 앞에서 하나 뽑는다.
    - 나머지 배열에 뽑은것 보다 우선순위가 높은것이 존재하는지 확인 하여 있으면 뒤로
    - 없으면 출력하고 횟수를 증가.
     */

const getTurnOfMyPrint = (priorities, location) => {
    const prints = priorities.map((v, i) => [v, location === i]);
    
    let count = 0;
    while (true) {
        let print = prints.shift();
        if (hasGreater(prints, print)) {
            //있으면 뒤로
            prints.push(print);
        } else {
            //없으면 count ++
            count++;
            if (print[1] == true) return count;
        }
    }
}
const get = (prints, count) => {
    const checkGrater = hasGreater(prints.slice(1, prints.length), prints[0])
    
    if (checkGrater) {
        return get(prints.slice(1, prints.length).push(prints[0]), count)
    } else {
        if (prints[1] == true && !checkGrater) return count + 1;

        return get(prints.slice(1, prints.length), count + 1)
    }
}

const hasGreater = (extraPrints, print) => extraPrints.filter(v => v[0] > print[0]).length > 0;


test('getTurnOfMyPrint', () => {
    expect(getTurnOfMyPrint([1], 0)).toBe(1);
    expect(getTurnOfMyPrint([1, 1], 1)).toBe(2);
    expect(getTurnOfMyPrint([1, 1, 9, 1, 1, 1], 0)).toBe(5);
    expect(getTurnOfMyPrint([2, 1, 3, 2], 2)).toBe(1);
})

test('hasGreater', () => {
    expect(hasGreater([[1, 1], [2, 2], [3, 3]], [1, 0])).toBe(true);
    expect(hasGreater([[1, 1], [1, 2], [1, 3]], [1, 0])).toBe(false);
    expect(hasGreater([[1, true], [9, false], [1, false], [1, false], [1, false]], [0, false])).toBe(true);
})