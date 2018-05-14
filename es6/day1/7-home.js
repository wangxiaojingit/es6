//Object
//对象常用方法 
//Object.assign 对象合并
let obj1={
    name:"lili"
}
let obj2={
    age:12
}
let obj3=Object.assign(obj1,obj2);
console.log(obj3)
//Object.setPrototypeOf(obj1,obj2) 给obj1 设置__proto__=obj2
let obj1={
    name:"lili"
}
let obj2={
    age:12
}
//obj1.__proto__=obj2  等价下面的方法
Object.setPrototypeOf(obj1,obj2);
console.log(obj1.age)
//super es6 关键字 相当于__proto__ 这个空间地址
let obj1={
    name:"lili"
}
let obj2={
    age:12,
    __proto__:obj1,
    getParentName(){
        return super.name
    }
}
console.log(obj2.getParentName())
