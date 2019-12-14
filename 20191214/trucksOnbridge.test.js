/*
    - 다리에 있는 트럭의 무게를 받아 진입할 트럭의 무게를 더했을 때, 한계 무게를 초과하는지 확인
        - 다리 큐 생성
        - 다리위의 모든 트럭의 무게와 진입할 트럭무게를 계산하여 진입이 가능한지 확인
        - 초과한다면 그냥 패스
        - 아니라면 트럭의 무게를 다리 큐에 트럭의 주행거리와 함께 입력
    - 그리고 다리 위의 모든 트럭의 주행거리를 올려준다..
    - 타이머를 올린다.
    - 다리에 맨 앞단에 있는 트럭을 확인하여 주행거리가 다리의 길이와 같다면 제거한다.
    - 준비중인 트럭 큐와, 다리큐의 길이가 모두 0이라면 count를 +1로 리턴.
*/

const getMinPassTime = (length, limit, weights) => {
    const bridge = [];
    let timer = 0;
    const test = 1;

    while(bridge.length != 0 || weights.length != 0){
    if (isAccepted(bridge, limit, weights[0])) {
        bridge.push([weights.shift(), 0])
    }

    for (let i = 0; i < bridge.length; i++) {
        bridge[i] = [bridge[i][0], bridge[i][1] + 1];
    }

    timer++;

    if (bridge[0][1] == length) {
        bridge.shift();
    }
    
    }
    
    return timer + 1;
}
    


    // return 2;
// }

const isAccepted = (bridge, limit, truckWeight) =>{
    if(truckWeight==null) return false;
    return bridge.length == 0 ? true : bridge.reduce((acc, cur) => acc + cur[0], 0) + truckWeight <= limit;
}
    


test('getMinPassTime', () => {

    // expect(getMinPassTime(1, 1, [1])).toBe(2);
    expect(getMinPassTime(1, 1, [1,1])).toBe(3);
    expect(getMinPassTime(1, 1, [1,1,1])).toBe(4);
    expect(getMinPassTime(2,10,[7,4,5,6])).toBe(8);
})

test('isAccepted', () => {
    expect(isAccepted([], 1, 1)).toBe(true);
    expect(isAccepted([[1, 0]], 1, 1)).toBe(false);
    expect(isAccepted([[1, 0], [1, 0]], 3, 1)).toBe(true);
    expect(isAccepted([[1, 0], [1, 0]], 3, 2)).toBe(false);
})
