//es6 函数

//1\ 函数形参的默认赋值--------
function sum (a=1,b=2){
  console.log(a,b)
}
sum()
//2\函数形参的剩余,剩余运算符,但是...arguments 就是一直到最后的一个参数了,不能再它的后面
//再继续写例如:sum2(a1,...arguments,b) 这样是错误的
function sum2(a1,...arguments){
  console.log( arguments) //1,2,3,b 是数组
}
sum2("$",1,2,3,"b");

//3箭头函数,function 会存在变量提升,箭头函数中不用function关键字.
//当省略大括号的时候,就相当于默认添加了return 但是如果返回的是一个对象,就必须加一个(),代表是一个整体.

function sum(a,b){
  return {"name":"lili"}
}

let sum=(a,b)=> ({"name":"lili"});
console.log(sum(1,2))

//箭头函数可以在一个函数中返回一个函数.
//高阶函数:当一个函数里面返回一个函数,或者一个函数里面可以传参一个函数
function sum(x){
  return function(y){
    return x+y;
  }
}

let sum=x=>y=>x+y;
console.log(sum(1)(2))
//箭头函数:省略关键字function
//当返回值可以简化成一行的时候,可以省去{return }
//箭头函数形参如果只有一个的话,可以省去()

//啥叫闭包?当一个函数的返回值是一个引用数据类型,并且被外界变量接收,形成不销毁的作用域叫闭包 
//23分钟