/*
    - 스킬 트리안에 있지 않는 유저의 스킬들은 모두 제거
    - 위에서 얻은 유저의 스킬이 스킬트리의 앞부분 부터 시작하는지 확인.
*/

const getCorrectSkillsCount = (skill, skill_trees) => 
    skill_trees.map(v => getFilteredSkill(skill, v)).reduce((acc, cur) => 
        skill.startsWith(cur) === true ? acc+1 : acc, 0);


const getFilteredSkill = (skill, skill_tree) =>  
    [...skill_tree].filter(v => skill.includes(v)==true).join('');

test('getCorrectSkillsCount', () => {
    expect(getCorrectSkillsCount("CBD", ["BACDE", "CBADF", "AECB", "BDA"])).toBe(2);
})

test('getFilteredSkill', () => {
    expect(getFilteredSkill("CBD", "BACDE")).toEqual("BCD");
})