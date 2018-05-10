//自定义模板规则
let name="wangxiaojin";
let age=18;
let str=fn`${name}已经${age}岁了,持续ing中`;
function fn(strs){
    console.log(strs)//[ '', '已经', '岁了,持续ing中' ]
   let arg=Array.prototype.slice.call(arguments,1) ;
   let str="";
   for(var i=0;i<arg.length;i++){
     str+=strs[i]+"('"+arg[i]+"')";
   } 
   
   return str+=strs[strs.length-1];
}
console.log(str);
//模拟字符串模板的实现
let name="xiaojin";
let age=18;
let str2='(\'${name}\')已经(\'${age}\')来来来';
str2=str2.replace(/\$\{([^}]*)\}/g,function(){
    return eval(arguments[1])
})
console.log(str2)
//padStart padEnd 补位功能

let s=2;
console.log(s.toString().padStart(2,0));


//模拟一个模板字符串的实现
let name="wangxiaojin";
let age=15;
let strr="('${name}')已经('${age}')岁了";
console.log(strr);
strr=strr.replace(/\$\{([^}]*)\}/g,function(){
   return eval(arguments[1]);
});
console.log(strr);
//自定义模板功能
let name="wangxiaojin";
let age=15;
let str=fn`${name}已经${age}岁了`;
function fn(arg){
  console.log(arg) //[ '', '已经', '岁了' ];
 let arg2=Array.prototype.slice.call(arguments,1);
  console.log(arg2)
  let  str="";
  for(var i=0;i<arg2.length;i++){
      str+=arg[i]+"('"+arg2[i]+"')";
  }
  str+=arg[arg.length-1];
  return str;
}
console.log(str);
//字符串的几个方法 startsWith endsWith includes str.repeat(n) str.padStart() str.padEnd()
let str="http://www.baidu.com";
console.log(str.startsWith("http"));
console.log(str.endsWith("com"));
console.log(str.includes("baidu"));
console.log("1".repeat(5));

let num=2;
num=num.toString().padStart(2,0);
console.log(num)
let num2=2;
num2=num2.toString().padEnd(2,0);
console.log(num2)
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
//对于属性值是引用数据类型的展开运算符拼接
let obj1={"hobbys":{name:["爬山","唱歌"]}};
let obj2={"age":12};
let obj3={...obj1,...obj2};
console.log(obj3)
obj3.hobbys.name="lili";
console.log(obj3);//{ hobbys: { name: 'lili' }, age: 12 }
console.log(obj1) //{ hobbys: { name: 'lili' } }
