/*
    - 인쇄물들을 하나를 뺀다.
    - 남은 인쇄목록에 방금 뽑은 인쇄물의 우선순위보다 높은게 있다면 인쇄목록의 맨 뒤로
    - 아니라면 출력 후 출력횟수를 증가 
*/
const getTurnsOfPrints = (priorities, location) => {
    

    const prints = priorities.map((v, i) => {
        return { index: i, priority: v }
    })
    
    return find(prints, location, 0);
    let count = 0;
    let print = prints.shift();

    if (hasGreaterPriority(print, prints) == true) {
        prints.push(print);
    } else {
        count++;
        if (print.index == location) {
            return count;
        }

    }

    // print = prints.shift();
    // if (hasGreaterPriority(print, prints) == true) {
    //     hasGreaterPriority.push(print);
    // } else {
    //     count++;
    //     if (print.index == location) return count;

    // }

    // 남아있는 목록에 print의 우선순위보다 큰게 존재하는지 확인.



    // return priorities[location];
}

const find = (prints, location, count) => {
    
    const check = hasGreaterPriority(prints[0], prints.slice(1, prints.length))

    if (prints[0].index == location && check == false) return count+1;

    if (check == false) {
        // 카운트를 올려주는 작업을 한다.
        return find(prints.slice(1, prints.length), location, count+1);
    } else {
        //뒤로 넣어준다.
        return find(prints.slice(1, prints.length).push(prints[0]), location, count)
    }



    return find(prints.slice(1, prints.length), location)
}

const hasGreaterPriority = (print, prints) => prints.length == 0 ?
    false : prints.filter(v => print.priority < v.priority).length > 0 ? true : false;




test('getTurnsOfPrints', () => {
    expect(getTurnsOfPrints([1], 0)).toBe(1)
    expect(getTurnsOfPrints([1, 1], 1)).toBe(2)
    expect(getTurnsOfPrints([1, 1, 1], 2)).toBe(3)
    expect(getTurnsOfPrints([1, 2, 1], 0)).toBe(3)
    // expect(getTurnsOfPrints([1, 2, 1], 1)).toBe(1)


    // expect(getTurnsOfPrints([1, 2, 3, 2], 2)).toBe(1)
})

test('hasGreaterPriority', () => {
    expect(hasGreaterPriority({ index: 1, priority: 1 }, [{ index: 2, priority: 2 }, { index: 3, priority: 1 }])).toBe(true);
})