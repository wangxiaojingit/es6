//类
//Object.definedProperty()
let obj1={"name":"lili"};
Object.defineProperty(obj1,"age",{
    value:12,
    enumerable:true,//是否可枚举
    configurable:true,
    writable:true

})
obj1.age=19
console.log(obj1)