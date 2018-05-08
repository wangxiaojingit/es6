//模板字符串
let age=19,name="lili";
let str="('"+name+"')"+"已经"+"('"+age+"')"+"岁了";
console.log(str)
//用es6的模板字符串  ('lili')已经('19')岁了  一句搞定
str=`('${name}')已经'(${age}')岁了`
//模拟一个模板字符串的实现

let name = 'zfpx';
let age = 9;
let str = '(\'${name}\')今年(${age})岁了'
str = str.replace(/\$\{([^}]*)\}/g, function () {
 return eval(arguments[1]) 
});
console.log(str);
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
//模板字符串支持换行
let str=`<ul> 
  <li></li>
</ul>`
//字符串的方法:startsWith endWith includes repeat    str.repeat(n)

let str="http://www.xiuktv.com";
console.log(str.startsWith("http"));
console.log(str.endsWith("com"));
console.log(str.includes("xiuktv"));
console.log('1'.repeat(10));
// padStart padEnd 补位
let date = new Date();
let y = date.getFullYear();
let m = date.getMonth()+1;
let d = date.getDate();
let str = `${y}年${m.toString().padEnd(2, 0)}月${d.toString().padStart(2, 0)}日`;

console.log(m.toString().padEnd(2, 0));