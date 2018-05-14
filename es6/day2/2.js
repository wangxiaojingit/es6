//实现数据类型判断
let ary=["Array","Function","String","Object","Number","Boolean","Undefined","Null"]
let obj={};
ary.forEach(function(item){
   obj["is"+item]=isType(item)
})
function isType(type){
   return function(content){
      let type2=Object.prototype.toString.call(content).replace(/\[object\s|\]/g,"");
      return type2==type;
   }
}
console.log(obj.isArray([1,2]))