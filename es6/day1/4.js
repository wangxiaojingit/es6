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

