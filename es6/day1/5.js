//剩余运算符          -----  展开运算符
let fn= (...arg) => {
  console.log(arg) //[1,2,3] 剩余运算符
}
fn(1,2,3)
//展开运算符
let b=(a,b)=>{
   console.log(a,b)
}
let fn=(...arg)=>{
   console.log(arg.slice(1))
   //把传过来的参数的后两项传给b函数
   b(...arg.slice(1))
}
fn(1,2,3);
let ary=[1,2,3];
//原始方法 求ary最小值 Math.min.apply(Math,ary),现在只用展开运算符就可以实现,借用的原理还是apply
let min=Math.min(...ary);
console.log(min);
//对象也可以使用...展开运算符
var obj1={"name":"wangxiaojin"};
var obj2={"age":27};
var obj3={...obj1,...obj2};
console.log(obj3)  //{"name":"wangxiaojin","age":27}
obj3.name="gaoyoujun";   
console.log(obj1.name); //wangxiaojin
console.log(obj3.name); //gaoyoujun
// 什么叫深拷贝,什么叫浅拷贝?
/**
 * 深拷贝:就是例如一个对象里面的属性值还是一个对象,在用...扩展运算符的时候,
 * 会把那个属性的引用地址进行拷贝,在修改拷贝的对象里面的属性值(如果这个值是引用数据类型)的时候,
 * 会把原来的也修改掉.
 * 
 * 对象...展开运算符只会对第一层进行展开.
 */
 
  let obj1={"name":"wangxiaojin","hobby":["爬山","跳舞","唱歌"]};
  let obj2={"age":12}
  let obj3={...obj1,...obj2};

  //对象的深拷贝和浅拷贝
//对于是值类型的,我们用下面的对象展开运算符进行拼接,发现修改obj3的属性值的时候,obj1的没有改变,
//但是如果是引用数据类型呢?我们再做一下测试
let obj1={"name":"lili"};
let obj2={"age":12};
let obj3={...obj1,...obj2}
console.log(obj3)
obj3.name="dv";
console.log(obj3);
console.log(obj1.name);
//对于属性值是引用数据类型的展开运算符拼接,
let obj1={"hobbys":{name:["爬山","唱歌"]}};
let obj2={"age":12};
let obj3={...obj1,...obj2};
console.log(obj3)
obj3.hobbys.name="lili";
console.log(obj3);//{ hobbys: { name: 'lili' }, age: 12 }
console.log(obj1) //{ hobbys: { name: 'lili' } }  //发现修改obj3里面的引用数据值,obj1也改变了 这就是浅拷贝
//对于上面的案例,我们如何实现深拷贝呢?
let obj1={"hobbys":{name:["爬山","唱歌"]},"loves":["aa"]};
let obj2={"age":12};
let obj3={...obj1,hobbys:{...obj1.hobbys},...obj2};

console.log(obj3);
obj3.hobbys.name="lili";
console.log(obj3);console.log(obj1);
//上面的写法就可以达到深拷贝,就不会影响之前的数据,那么我们趁热打铁,再来练一个
let obj1={frend:{"name":"daver"},study:{"name":"js"}};
let obj2={"age":22};
let obj3={...obj1,frend:{...obj1.frend},...obj2}
obj3.frend.name="lili";
console.log(obj3);
console.log(obj1);
//深拷贝和原来的数据没有关系
//我们用字符串实现深拷贝
let obj1={name:{"name":"lili"}};
let obj2=JSON.parse(JSON.stringify(obj1));

obj2.name.name="dv";
console.log(obj2);//{ name: { name: 'dv' } }
console.log(obj1) //{ name: { name: 'lili' } }

let obj1={name:{"name":'dv'}}
let obj2=obj1;
obj2.name.name="lili";
console.log(obj1)
  


