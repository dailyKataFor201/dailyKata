
const numberofpeopleinbbus = (busStations) => 
     busStations.reduce((totalNum, [inNum,outNum]) => {
        return totalNum + inNum - outNum;
    },0);


test('numberofpeopleinbbus', () => {
    expect(numberofpeopleinbbus([[10,0],[3,5],[5,8]])).toBe(5);
    expect(numberofpeopleinbbus([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).toBe(17);
});