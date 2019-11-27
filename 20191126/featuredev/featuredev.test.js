/*
방법 1
    - progresses를 스택으로 사용하고, 없어질때까지 순회한다.
    - progresses에 speeds에 있는 진행량을 각 작업에 대해 더한다.
    - progresses의 맨 앞의 작업이 완료됬다면 팝하고 result 배열에 순서대로 담는다., 다음것도 완료됬는지 확인하기 위해 반복한다.
방법 2
    - 각 작업마다 남은 날 수를 구한다.
    - 첫 작업부터, 남은 날수가 자신보다 큰 인덱스를 찾는데 인덱스를 넘어갈 때마다, 갯수를 센다.
    - 찾으면, 그 남은 작업수보다 더 큰 남은 날이 존재하는지 찾으면서, 위와 같이 반복한다.
    - 7, 3, 9
*/

const featuredev = (progresses, speeds) => {
    const extraDays = getExtraDays(progresses, speeds);
    return getDeliveryCounts(extraDays);
}

const getExtraDays = (progresses, speeds) => progresses.map((v,i) => 
                                                    Math.ceil((100-v)/speeds[i]));
    
const getDeliveryCounts = (extraDays) => {
    const result = [];
    var deleveryDay = 0;
    var maxDay = extraDays[0];
    for(let i = 0; i < extraDays.length; i ++){
        if(extraDays[i] > maxDay) {
            deleveryDay += 1;
            maxDay = extraDays[i];
        }
        if(result[deleveryDay]==null) result[deleveryDay] = 0;
        result[deleveryDay] += 1;
    }
    return result;
}
test('featuredev',() => {
    expect(featuredev([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
    expect(featuredev([93, 30], [1, 30])).toEqual([2]);
})

test('getExtraDays', () => {
    expect(getExtraDays([93, 30, 55], [1, 30, 5])).toEqual([7, 3, 9]);
})

test('getDeliveryCounts', () => {
    expect(getDeliveryCounts([7, 3, 9])).toEqual([2, 1]);
})