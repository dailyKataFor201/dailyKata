
const addMatrix = (arr1, arr2) => {
    const result = [];
    for(let i = 0; i < arr1.length; i++){
        const item = [];
        for(let j = 0; j < arr1[0].length; j++){
            item.push(arr1[i][j]+arr2[i][j]);
        } 
        result.push(item);
    }

   const test= arr1.map((v1, i1) => {
        return v1.map((v2,i2) => {
            // console.log(v2, arr2[0][i2);
            return  parseInt(v2)+parseInt(arr2[i1]);
        });
    })
    console.log(test);
    return result;
}


test('addMatrix', () => {
    expect(addMatrix([[1],[2]],[[3],[4]])).toEqual([[4],[6]]);
    expect(addMatrix([[1,2],[2,3]],[[3,4],[5,6]])).toEqual([[4,6],[7,9]]);
});