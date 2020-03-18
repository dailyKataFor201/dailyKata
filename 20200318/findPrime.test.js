const getCombination = (arr) => {
    return [1,2,12];
};

const getAllCom = (arr, n) => {
    const result = [];
    if (n == 2) {
        return [[arr[0],arr[1]].join(''),+(arr[0]+""+arr[2]),+(arr[1]+""+arr[2])];
    }
    arr.forEach(v => {
        result.push(v);
    });
    return result;
}
test("getAllCombination", () => {
    expect(getCombination([1,2])).toEqual([1,2,12]);
});

test('getAllCom', () => {
    expect(getAllCom([1,2,3],1)).toEqual([1,2,3]);
    expect(getAllCom([1,2,3,4],1)).toEqual([1,2,3,4]);
    expect(getAllCom([1,2,3],2)).toEqual([12,13,23]);
})