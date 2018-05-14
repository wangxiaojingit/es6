//es5 实现es6 class 的继承
var P=function(){

};
P.fn=function(){
    return 100
}
function ischecknew(intance,classFn){

   if(!(intance instanceof classFn)){
     throw Error("without new")
   }
}
function inherits(subClass,superClass){
   subClass.prototype=Object.create(superClass);
   subClass.__proto__=superClass
}
var Child=function(P){
    inherits(Child,P);//继承公有和私有以及静态属性
    function Child(){
       ischecknew(this,Child);
       
    }
    return Child
}(P)

console.log(Child.fn())
