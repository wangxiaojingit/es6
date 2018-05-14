import { setTimeout } from "timers";

//同步:连续执行
//异步:中间去干其它事情
//callback----promise----generator +co---async+await (语法糖);

let fs=require("fs"); //异步不支持try catch  try catch 只针对同步
fs.readFile('./day2/1.txt','utf-8',function(err,data){
    fs.readFile(data,"utf-8",function(err,data){
       console.log(err)
       console.log(data)
    })
})
//异步不支持两个异步数据的合并,异步方案不支持return


fs.readFile('./day2/1.txt','utf-8',function(err,data){
    fs.readFile(data,"utf-8",function(err,data){
       console.log(err)
       console.log(data)
    })
})
fs.readFile('./day2/2.txt','utf-8',function(err,data){
    fs.readFile(data,"utf-8",function(err,data){
       console.log(err)
       console.log(data)
    })
})
//高阶函数:把函数当一个参数进行传值,或者是一个函数里面返回一个函数都叫高阶函数.
function isType(type,content){
 return Object.prototype.toString.call(content)==`[object ${type}]`
}
console.log(isType("String","hello"))
console.log(isType("Array","hello"))
//高阶函数的写法 :批量生成函数
function isType(type){ //偏函数
   return function(content){
     return Object.prototype.toString.call(content)==`[object ${type}]`
   }
}
let isString=isType("String");
let res=isString("hello");
console.log(res)
let isArray=isType("Array");
let res2=isArray("zf");
console.log(res2)
//预置函数作为参数 lodsh_after
function after(time,callback){
     return function(){
         time--;
         if(time==0){
            callback()
         }
     }
}
let eat=after(3,function(){
    console.log("饱了")
})
eat()
eat()
eat()
//要想读取两个文件的内容,并且合并
let fs=require("fs");
let a=[];
function out(data){
  a.push(data);
  if(a.length==2){
     console.log(a) 
  }
}
fs.readFile('./day2/3.txt','utf-8',function(err,data){
   console.log(data)
   out(data)
})
fs.readFile('./day2/4.txt','utf-8',function(err,data){
   console.log(data)
   out(data) 
})
//用预置函数来实现
let fs=require("fs");
function after(times,callback){
     return function(data){
         arr.push(data);
         times--;
         if(times==0){
           callback()
         }
     }
}
let arr=[];
let out=after(2,function(){
     console.log(arr);
   })
fs.readFile('./day2/3.txt','utf-8',function(err,data){
    out(data)
    
 })
 fs.readFile('./day2/4.txt','utf-8',function(err,data){
    console.log(data)
    out(data) 
 })

 //再次练习预置函数
 
 function after(time,callback){ //可以缓存函数,根据具体条件执行
    let arr=[];
    return function(data){
        arr.push(data);
        time--;
       if(time==0){
         callback(arr)
       }
    }
 }
 let out=after(2,function(arr){
     console.log(arr)
 })
 let fs=require("fs");
 fs.readFile('./day2/3.txt',"utf-8",function(err,data){
    out(data)
 })

 fs.readFile('./day2/3.txt',"utf-8",function(err,data){
    out(data)
 })
 //promise 解决地狱回调的问题
 

