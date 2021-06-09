
/*
1. 한점을 찍는다.
2. 임의의 방향으로 2자리 앞이 길인지 확인한다
    - a : 길이라면 현재 길중에 하나를 임의로 가져와 2번을 반복한다.
    - b : 벽이라면 길로 변경 하고 2자리 앞에 이동한 곳에서 다시 2번을 반복한다.
4. 각각의 길은 자신이 갔던 방향을 기록하고 4방향 모두 갔다 왔다면 2번의 임의의 방향으로 선정되지 못하도록 한다.
5. 짝수의 길에서 모든 방향이 모두 사용되었다면 종료한다. 
*/
const dirs = [[-1,0,-2,0], [1,0,2,0], [0,-1,0,-2], [0,1,0,2]];

const getR = (w,h) => {
    while(true){
        // console.log("랜덤",w,h);
        const x = Math.floor(Math.random() * (w-2)) + 2;
        const y = Math.floor(Math.random() * (h-2)) + 2;
        console.log("랜덤",x,y);
        if(x % 2 == 0 && y % 2 == 0) return {"x":x,"y":y};
    }
}
const check = ({x,y}) =>  x % 2 == 0 || y % 2 == 0;

class Point{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.dirs = [[-1,0,-2,0], [1,0,2,0], [0,-1,0,-2], [0,1,0,2]];
    }

    popDir(){
        if(this.dirs.length == 0) return null;
        const r = getRandom(this.dirs.length);
        console.log("길이",this.dirs.length);
        console.log("나온 랜덤값",r);
        console.log("팝 방향들",this.dirs );
        const tmp = this.dirs[r];
        this.dirs.splice(r,1);
        console.log("asdfasdfadsf",tmp);
        console.log('남은 방향 ; '+this.dirs);
        return tmp;
    }
    isValid(){
        return this.dirs.length > 0;
    }
}

const getRandom = (to)=>  Math.floor(Math.random() * (to-1)) + 0;

class Road{
    constructor(){
        this.roads = [];
    }
    
    recover(p){
        this.roads.unshift(p);
    }
    insert(p){
        if(p.x % 2 == 0 && p.y % 2 == 0){
            this.roads.push(p);
        }
    }
    getPoint(){
        if(this.roads.length == 0) return null;
        const r = getRandom(this.roads.length);
        const tmp = this.roads[r];
        this.roads.splice(r,1);
        return tmp;
    }
    shuffle(){
        const arr = [];
        while(arr.length<this.roads.length){
            const v = Math.floor( Math.random() * this.roads.length ) + 0;
            if(!arr.includes(v)){
                arr.push(v);
            }
        }
        const result = [];
        for(const i of arr){
            result.push(this.roads[i]);
        }
    return result;

    }
}

class Map{
    constructor(arr){
        this.map = arr;
    }
    get(){
        return this.map;
    }
    use(x,y){
        this.map[y][x] = "□";
    }
    isAvailable(x,y){
        console.log("map : ",x,y)
        return this.map[y][x] != "□";
    }
}

class Adventurer{
    constructor(map, road){
        this.map = map;
        this.road = road;
    }
    addRoad(p){
        this.road.insert(new Point(p.x,p.y));
    }
    getMaze(x, y){
        this.map.use(x,y)
        this.addRoad(new Point(x,y));
        let point;
        let i = 0;
        while(point = this.road.getPoint()){
            const [x1, y1, x2, y2] = point.popDir(); 
            //방향 확인.
            if(this.map.isAvailable(point.x + x2, point.y + y2)) {
                this.road.insert(new Point(point.x + x1, point.y + y1))
                this.road.insert(new Point(point.x + x2, point.y + y2))
                this.map.use(point.x + x1,point.y + y1);
                this.map.use(point.x + x2,point.y + y2);
                if(point.isValid()){
                    this.road.recover(point);
                }
            }else{
                if(point.isValid()){
                    this.road.insert(point);
                }
                this.road.shuffle();
            }
        }
        console.log(this.map);
        return this.map;
    }
    
    
}
class MapManager{
    constructor(mapStrategy){
        this.mapStrategy = mapStrategy;
    }
    makeMap(w,h){
       return this.mapStrategy.run(w,h);
    }
}
class MapStrategy{
    constructor(){
        this.mapInitializer = new MapInitializer();
    }
    run(w,h){
        const startP = getR(w,h);
        const map = new Map(this.mapInitializer.initMap(w,h))
        const adventurer = new Adventurer(map, new Road());
        return adventurer.getMaze(startP.x,startP.y);
        
    }
}
class MapInitializer{
    initMap(w,h) {
        const arr = [];
        for(let y = 0; y < h; y++){
            arr.push([]);
        }
        for(let y = 0; y < h; y ++){
            for(let x = 0; x < w; x++){
                if(y == 0 || y == h-1) arr[y][x] = "□";
                else if(x == 0 || x == w-1){
                    arr[y][x] = "□";
                }else{
                    arr[y][x] = "■";
                }
            }
        }
        return arr;
    }
}
test('맵 만들기', ()=>{
    const mapManager = new MapManager(new MapStrategy());
    expect(mapManager.makeMap(15,15)).toBe(true);
});
