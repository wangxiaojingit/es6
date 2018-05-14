//静态属性
function Parent (){

  this.name="parent"
}
Parent.prototype.smoking=function(){
    console.log("烟")
}
Parent.age=12
function Child(){

}
Child.prototype=Object.create(Parent.prototype,{constructor:{value:Child}})
//let child=new Child;
//child.smoking();//"吸烟"
//console.log(child.age);//undefined
//要想继承静态属性.子类要想继承父类的静态属性，可以用下面的做到
Child.__proto__=Parent;
let child=new Child;
console.log(Child.age);
//console.log(child.name)