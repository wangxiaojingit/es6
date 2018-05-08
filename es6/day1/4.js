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
console.log(s.toString().padStart(2,0))