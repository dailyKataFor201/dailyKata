
const makeReverseArr = (intValue) =>{
     return intValue.toString().split('').reduce((acc, cur) => [parseInt(cur),...acc], [])
}
        
    

test("makeReverseArr", () => {
    expect(makeReverseArr(12)).toEqual([2,1]);
    expect(makeReverseArr(123)).toEqual([3,2,1]);
    expect(makeReverseArr(1234)).toEqual([4,3,2,1]);
    expect(makeReverseArr(12345)).toEqual([5,4,3,2,1]);
})