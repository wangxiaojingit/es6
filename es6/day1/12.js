//set 和map
// 数组去重

let set=new Set([1,2,1,1,12,2,4]);
console.log(set) //Set { 1, 2, 12, 4 }
//把set 转换成数组
set=Array.from(set);
console.log(set);//[ 1, 2, 12, 4 ]
//set.add  set.delete set.has
let set=new Set([1,2,1,1,12,2,4]);
set.add("100");
console.log(set)//Set { 1, 2, 12, 4, '100' }
set.delete(1)//Set { 2, 12, 4, '100' }
console.log(set)
console.log(set.has(2)) //true 
//map-----------set 里面的参数只能是一个,map只能是键值对
let map=new Map();
map.set("hobbys",["唱歌","跳舞"]);
console.log(map) //Map { 'hobbys' => [ '唱歌', '跳舞' ] }
map.set("hobbys",[1,2,3])
console.log(map)//Map { 'hobbys' => [ 1, 2, 3 ] } 对于key 相同的,后者的值会把前者的覆盖
console.log(map.has("hobbys"))

