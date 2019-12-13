/*

    - 매 초마다 현재 다리에 있는 모든 트럭의 무게를 확인하여, 다음 트럭이 들어갈 수 있는지 확인
        - 들어갈 수 있다면 다리에 들어감
        - 들어갈 수 없다면 패스
    - 현재 다리에 있는 모든 트럭의 시간을 1로 증가 시킨다.
    - 다리의 길이를 확인하여 나갈 수 있는지 확인하고 내보내준다.
    - 현재 다리 안에 or 아직 다리에 들어오지 못한 버스가 존재하다면, for문을 진행하고
    - 없다면 현재 count를 리턴한다.

bridge_length	  weight	truck_weights	                  return
2	                10	    [7,4,5,6]	                        8
100	                100	    [10]	                           101
100	                100	    [10,10,10,10,10,10,10,10,10,10] 	11
*/

const getMinSecond = (length, limit, truck_weights) => {
    const bridge = [];
    let count = 0;

    while(true){
        // console.log("몇회")
        if (bridge.length == 0 && truck_weights.length == 0) return count + 1;

        if (getWeightsOnTheBridge(bridge) + truck_weights[0] <= limit) {
            bridge.push([truck_weights.shift(),0]);
            // console.log("입력 ",count," : ",bridge);
        }
        
        for (let i = 0; i < bridge.length; i++) {
            bridge[i] = [bridge[i][0],bridge[i][1]+1];
            
        }
        // console.log("시간 증가 ",count," : ",bridge);
        
        // console.log(count," : ",bridge);
        if(bridge[0][1] === length){
            bridge.shift();
            // console.log("출력 ",count," : ",bridge);
        }
        count++;
        // console.log("카운트 증가 ",count);
    }


    


    // if (bridge.length == 0 && truck_weights.length == 0) return count + 1;

    // if (getWeightsOnTheBridge(bridge) + truck_weights[0] <= limit) {
    //     bridge.push([truck_weights.shift(),0]);
    // }
    // count++;
    // for (let i = 0; i < bridge.length; i++) {
    //     bridge[i] = [bridge[i][0],bridge[i][1]+1];
    // }
    // if(bridge[0][1]===limit){
    //     bridge.shift();
    // }

    // if (bridge.length == 0 && truck_weights.length == 0) return count + 1;

    // if (getWeightsOnTheBridge(bridge) + truck_weights[0] <= limit) {
    //     bridge.push([truck_weights.shift(),0]);
    // }
    // count++;
    // for (let i = 0; i < bridge.length; i++) {
    //     bridge[i] = [bridge[i][0],bridge[i][1]+1];
    // }
    // if(bridge[0][1]===limit){
    //     bridge.shift();
    // }
    

}

const getWeightsOnTheBridge = (bridge) =>
    bridge.length == 0 ? 0 : bridge.reduce((acc, cur) => acc + cur[0], 0)


// [7][7][4][4]
test('getMinSecond', () => {
    expect(getMinSecond(1, 1, [1])).toBe(2);
    expect(getMinSecond(1, 1, [1,1])).toBe(3);
    expect(getMinSecond(1, 1, [1,1,1])).toBe(4);
    expect(getMinSecond(2, 1, [1,1,1])).toBe(7);
    expect(getMinSecond(2,10,[7,4,5,6])).toBe(8);
    expect(getMinSecond(100,100,[10])).toBe(101);
    expect(getMinSecond(100, 100, [10,10,10,10,10,10,10,10,10,10])).toBe(110);
})

test('getWeightsOnTheBridge', () => {
    expect(getWeightsOnTheBridge([])).toBe(0);
    expect(getWeightsOnTheBridge([[1,0]])).toBe(1);
    expect(getWeightsOnTheBridge([[1,0], [1,0]])).toBe(2);
})

