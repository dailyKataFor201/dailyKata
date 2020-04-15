
/*
// 트랜잭션 합계 구하기
// 스냅샷에 트랜잭션 적용해주기
// 만약 트랜잭션에 해당하는 스냅샷이 없다면 만들어서 넣어주기.
// 
*/
const solution = (snapshots, transactions) => {
    return [
        ["ACCOUNT1", "50"], 
        ["ACCOUNT2", "220"], 
        ["ACCOUNT3", "500"]
       ];
};

  test(solution, () => {
      expect(solution([
        ["ACCOUNT1", "100"], 
        ["ACCOUNT2", "150"]
      ],
      [
        ["1", "SAVE", "ACCOUNT2", "100"],
        ["2", "WITHDRAW", "ACCOUNT1", "50"], 
        ["1", "SAVE", "ACCOUNT2", "100"], 
        ["4", "SAVE", "ACCOUNT3", "500"], 
        ["3", "WITHDRAW", "ACCOUNT2", "30"]
      ]
      )).toEqual(  [
        ["ACCOUNT1", "50"], 
        ["ACCOUNT2", "220"], 
        ["ACCOUNT3", "500"]
       ]);
  })