//obj
// 对于key 和value 值相等的可以简写,对于对象中的函数属性,可以去掉:和function
let name="lili";
let age=13
let obj={
    age,
    name,
    fn:function(){
        console.log(1)
    },
    fn1(){

    }
}
console.log(obj);
//super 相当于自身.__proto__
let obj={
    name:"li",
    age:12
}
let obj2={
    age:16,
    name:"dv",
    __proto__:obj,
    getParentName(){
      return super.name //super 就是指的__proto 原型上的地址
    }
    
}
//想从obj2 拿到obj 上的name
console.log(obj2.__proto__.name) //"li"
console.log(obj2.getParentName())//"li" 同样也可以拿到

function Parent(){
    this.name="lili"
}
Parent.prototype.smock=function(){
    return "烟火"
}
function Child(){

}

Child.prototype=new Parent();
let child=new Child();
console.log(child.name);
console.log(child.smock())