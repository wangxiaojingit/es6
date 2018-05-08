//es6 数组 对象 函数

//变量声明用 let const 取代var
//1、var 没有作用域的概念,只有全局作用域和函数作用域----------------------------------

var a=1;
console.log(window.a)//1 默认挂载到了全局作用域


let a=1;
console.log(window.a) //undefined ,没有挂载到window

//污染全局变量----------------
for(var i=0;i<3;i++){
   
}
console.log(i);//  3

for(let i=0;i<3;i++){
    
 }
 console.log(i);//  i is not defined


for(var i=0;i<3;i++){
    (function(i){
        setTimeout(function(){
            console.log(i)
        },1000*i)
       
        
    })(i)

}
//let  有代码块的概念,用{} 包裹起来就相当于一个代码块------


for(let i=0;i<3;i++){
        setTimeout(function(){
            console.log(i)
        },1000*i)
}
// 2\ let 不支持重复定义(在同一个作用域)
// 暂存死区,如果在当前作用域声明过一个变量,会把当前变量保存到当前作用域


let a=100;
let a=2;
console.log(a) //Identifier 'a' has already been declared
 let b=1;
 {   
     console.log(b)//b is not defined
     let b=2;
     console.log(b) //2
 }

// 3\ let  不支持变量提升------------------------------
console.log(c) //c is not defined
let c=3;
//4 var 不支持声明常量,const 可以.但是对于引用数据类型的常量,只要引用地址不改变,就是对的,
//可以对里面的具体属性值更改.------------------------------------------------------

const pi=3.14156;
pi=4 //报错Assignment to constant variable.

const per={"name":"xj","age":12};
per.age=10;
console.log(per)
//解构赋值 把结构相同的变量进行声明并赋值

let [age,name]=[1,"lili"];
console.log(age,name);
//在数组解构赋值中,是有序的,如果前面有不需要的,必须用","进行站位.
let [,pname]=[1,"lili"] 
console.log(pname)

//对象解构赋值,是无序的,根据对象的属性名字进行解构赋值
let {name,age}={"age":12,"name":"lili"}
console.log(age)
//对象的结构赋值中,如果变量名字是关键字等,我们需要重新命名,用":";
let {default:age}={default:13}
console.log(age)

//在对象解构中,想要付一个默认值,我们需要用"=";
let {name,age=16}={"name":"lili"};
console.log(age)
//数组和对象的混合解构赋值
let [,,{hobby:[,val]}]=[{"name":"lili"},{"age":12},{"hobby":["爬山","跑步"]}];
console.log(val)
//函数的

function ajax({data,url,method="get"}){
   console.log(data,url,method)
}
ajax({
    data:{
        a:"1"
    },
    url:"/test",
})
