/*
    - arr1,arr2를 이진수로 해독한다.
    - 지도를 합친다
    - 이진수를 기호로 변경
    - 출력.
*/
const getDecryptedMap = (n, arr1, arr2) => 
                    convertBinaryToSign(combineMaps([arr1, arr2].map((v) => 
                            convertIntArrayToBinaryArray(v)))).map((v) => v.join(''));


const convertIntArrayToBinaryArray = (array) => array.map((v) =>  decryptIntToBinary(v,array.length));


const decryptIntToBinary = (intValue, n) => intValue.toString(2).padStart(n,0).split('')
                                                                    .map((v) => parseInt(v))

const combineMaps = ([map1,map2]) => map1.map((v1, i) => 
                                            v1.map((_, j) => map1[i][j] == 1 || map2[i][j] == 1 ? 1 : 0))
    
const convertBinaryToSign = (binaryMap) => 
                    binaryMap.map((v,i) => v.map((_,j) => binaryMap[i][j] == 1 ? "#" : " "))
   

test('getDcryptedMap', () => {
    expect(getDecryptedMap(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
                                                .toEqual(["#####","# # #", "### #", "#  ##", "#####"]);
    // expect(getDcryptedMap(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]))
    //                                             .toEqual(["######", "### #", "## ##", " #### ", " #####", "### # "]);
})

test('convertIntArrayToBinaryArray', () => {
    expect(convertIntArrayToBinaryArray([9, 20, 28, 18, 11])).toEqual(
        [[0,1,0,0,1],[1,0,1,0,0],[1,1,1,0,0],[1,0,0,1,0],[0,1,0,1,1]]
    );
});

test('decryptIntToBinary', () => {
    expect(decryptIntToBinary(9,5)).toEqual([0,1,0,0,1]);
})

test('combineMaps', () => {
    expect(combineMaps([[ [ 0, 1, 0, 0, 1 ], [ 1, 0, 1, 0, 0 ], [ 1, 1, 1, 0, 0 ], [ 1, 0, 0, 1, 0 ], [ 0, 1, 0, 1, 1 ] ], 
        [ [ 1, 1, 1, 1, 0 ], [ 0, 0, 0, 0, 1 ], [ 1, 0, 1, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 1, 1, 0, 0 ] ]]))
        .toEqual([[1,1,1,1,1], [1,0,1,0,1], [1,1,1,0,1], [1,0,0,1,1], [1,1,1,1,1]]);
})

test('convertBinaryToSign', () => {
    expect(convertBinaryToSign([[1,1,1,1,1], [1,0,1,0,1], [1,1,1,0,1], [1,0,0,1,1], [1,1,1,1,1]]))
.toEqual([['#','#','#','#','#'],['#', ' ', '#', ' ',  '#'], ['#', '#', '#', ' ', '#'], ['#', ' ', ' ', '#', '#'], ['#', '#', '#', '#', '#']]);
})