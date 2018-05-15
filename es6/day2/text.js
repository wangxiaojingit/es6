//再次练习预置函数
let fs=require("fs");
let arr=[];
function After(time,callback){
   return function(data){
          arr.push(data)
          time--;
          if(time==0){
            callback();
          }
   }
}
let out=After(2,function(){
    console.log(arr)
})
fs.readFile('./day2/3.txt',"utf-8",function(err,data){
  out(data)
})
fs.readFile('./day2/4.txt',"utf-8",function(err,data){
    out(data)
})

//实现数据类型的判断
let obj={};
let ary=["String","Number","Object","Boolean","Null","Undefined","Function","Array"];
function isType(type){
   return function(content){
     let type2= Object.prototype.toString.call(content).replace(/\[object\s|\]/g,"")
     console.log(type2);
     return type==type2
   }
}
ary.forEach(item=>{
    obj["is"+item]=isType(item)
})
console.log(obj.isString("123"))
console.log(obj.isArray([1,2,3]))

//练习判断类
let ary=["Number","String","Boolean","Function","Null","Undefined","Object","Array"];
let obj={};
ary.forEach(function(item){
  obj["is"+item]=isType(item)
})
function isType(type){
   return function(item){
     let typeBack= Object.prototype.toString.call(item).replace(/\[object\s|\]/g,"");
     console.log(typeBack);
     return typeBack==type;
   }
}

console.log(obj.isArray([1,2,3]))