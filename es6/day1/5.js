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



